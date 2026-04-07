"use client";

import { useState } from "react";

import { Pressable, Text, TextInput, View } from "./primitives";
import { getMobileCalculatorEntry, mobileCalculatorRegistry } from "./registry";

function MobileCalculatorCard({
    title,
    description,
    slug,
    onPress,
}: {
    title: string;
    description: string;
    slug: string;
    onPress: (slug: string) => void;
}) {
    return (
        <Pressable accessibilityLabel={`Open ${title}`} onPress={() => onPress(slug)} style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardSlug}>{slug}</Text>
            </View>
            <Text style={styles.cardDescription}>{description}</Text>
            <Text style={styles.cardAction}>Open calculator</Text>
        </Pressable>
    );
}

function MobileRegistryScreen({
    query,
    onQueryChange,
    onOpenCalculator,
}: {
    query: string;
    onQueryChange: (nextQuery: string) => void;
    onOpenCalculator: (slug: string) => void;
}) {
    const normalizedQuery = query.trim().toLowerCase();
    const filteredCalculators = mobileCalculatorRegistry.filter((calculator) => {
        if (!normalizedQuery) {
            return true;
        }

        return `${calculator.title} ${calculator.description} ${calculator.slug}`.toLowerCase().includes(normalizedQuery);
    });

    return (
        <View style={styles.screen}>
            <View style={styles.heroCard}>
                <Text style={styles.eyebrow}>Mobile registry</Text>
                <Text style={styles.title}>Choose a calculator</Text>
                <Text style={styles.description}>
                    {mobileCalculatorRegistry.length} calculators are wired into the mobile navigation shell.
                </Text>

                <TextInput
                    accessibilityLabel="Search calculators"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="search"
                    onChangeText={onQueryChange}
                    placeholder="Search calculators"
                    style={styles.searchInput}
                    value={query}
                />
            </View>

            <View style={styles.sectionHeader}>
                <Text style={styles.sectionLabel}>Registry</Text>
                <Text style={styles.sectionMeta}>{filteredCalculators.length} match{filteredCalculators.length === 1 ? "" : "es"}</Text>
            </View>

            <View style={styles.list}>
                {filteredCalculators.length > 0 ? (
                    filteredCalculators.map((calculator) => (
                        <MobileCalculatorCard
                            key={calculator.slug}
                            slug={calculator.slug}
                            title={calculator.title}
                            description={calculator.description}
                            onPress={onOpenCalculator}
                        />
                    ))
                ) : (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyTitle}>No calculators found</Text>
                        <Text style={styles.emptyDescription}>Try a different keyword or clear the search field.</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

function MobileCalculatorScreenView({
    calculator,
    onBack,
}: {
    calculator: NonNullable<ReturnType<typeof getMobileCalculatorEntry>>;
    onBack: () => void;
}) {
    const Screen = calculator.Screen;

    return (
        <View style={styles.screen}>
            <Pressable accessibilityLabel="Back to registry" onPress={onBack} style={styles.backButton}>
                <Text style={styles.backButtonText}>Back to registry</Text>
            </Pressable>

            <View style={styles.detailHero}>
                <Text style={styles.eyebrow}>Selected calculator</Text>
                <Text style={styles.title}>{calculator.title}</Text>
                <Text style={styles.description}>{calculator.description}</Text>
            </View>

            <View style={styles.detailFrame}>
                <Screen />
            </View>
        </View>
    );
}

export function MobileApp() {
    const [query, setQuery] = useState("");
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

    const selectedCalculator = selectedSlug ? getMobileCalculatorEntry(selectedSlug) : null;

    if (selectedCalculator) {
        return (
            <MobileCalculatorScreenView
                calculator={selectedCalculator}
                onBack={() => setSelectedSlug(null)}
            />
        );
    }

    return (
        <MobileRegistryScreen
            query={query}
            onQueryChange={setQuery}
            onOpenCalculator={setSelectedSlug}
        />
    );
}

const styles = {
    screen: {
        gap: 16,
        padding: 16,
        minHeight: "100vh",
        overflowY: "auto",
        backgroundColor: "#f6efe5",
    },
    heroCard: {
        gap: 10,
        borderRadius: 24,
        padding: 18,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#ffffff",
    },
    eyebrow: {
        fontSize: 12,
        fontWeight: "700" as const,
        letterSpacing: 1.8,
        textTransform: "uppercase" as const,
        color: "#8a6b45",
    },
    title: {
        fontSize: 28,
        lineHeight: 34,
        fontWeight: "700" as const,
        color: "#1b1a17",
    },
    description: {
        fontSize: 15,
        lineHeight: 22,
        color: "#5c554b",
    },
    searchInput: {
        marginTop: 6,
        width: "100%",
        borderWidth: 1,
        borderRadius: 18,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderColor: "rgba(27,26,23,0.12)",
        backgroundColor: "#fff",
        color: "#1b1a17",
        fontSize: 16,
    },
    sectionHeader: {
        flexDirection: "row" as const,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 4,
    },
    sectionLabel: {
        fontSize: 12,
        fontWeight: "700" as const,
        letterSpacing: 1.4,
        textTransform: "uppercase" as const,
        color: "#8a6b45",
    },
    sectionMeta: {
        fontSize: 13,
        fontWeight: "600" as const,
        color: "#6c655b",
    },
    list: {
        gap: 12,
    },
    card: {
        gap: 8,
        display: "flex",
        width: "100%",
        textAlign: "left",
        borderRadius: 22,
        padding: 16,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#ffffff",
    },
    cardHeader: {
        flexDirection: "row" as const,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },
    cardTitle: {
        flex: 1,
        minWidth: 0,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "700" as const,
        color: "#1b1a17",
    },
    cardSlug: {
        fontSize: 11,
        fontWeight: "700" as const,
        letterSpacing: 1.1,
        textTransform: "uppercase" as const,
        color: "#8a6b45",
    },
    cardDescription: {
        fontSize: 14,
        lineHeight: 20,
        color: "#5c554b",
    },
    cardAction: {
        fontSize: 13,
        fontWeight: "700" as const,
        color: "#8a6b45",
    },
    emptyState: {
        gap: 8,
        borderRadius: 22,
        padding: 16,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#fff8ef",
    },
    emptyTitle: {
        fontSize: 16,
        fontWeight: "700" as const,
        color: "#1b1a17",
    },
    emptyDescription: {
        fontSize: 14,
        lineHeight: 20,
        color: "#5c554b",
    },
    backButton: {
        display: "inline-flex",
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#ffffff",
    },
    backButtonText: {
        fontSize: 14,
        fontWeight: "700" as const,
        color: "#1b1a17",
    },
    detailHero: {
        gap: 10,
        borderRadius: 24,
        padding: 18,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#ffffff",
    },
    detailFrame: {
        borderRadius: 28,
        overflow: "hidden",
    },
} as const;