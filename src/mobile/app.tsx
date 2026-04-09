"use client";

import { useState } from "react";

import { NavigationContainer, type LinkingOptions } from "@react-navigation/native";
import { createNativeStackNavigator, type NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ExpoLinking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Pressable, Text, TextInput, View } from "./primitives";
import { getMobileCalculatorEntry, mobileCalculatorRegistry } from "./registry";

type RootStackParamList = {
    Registry: undefined;
    Calculator: { slug: string };
};

type MobileCalculatorEntry = NonNullable<ReturnType<typeof getMobileCalculatorEntry>>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [ExpoLinking.createURL("/"), "noblecalculator://"],
    config: {
        screens: {
            Registry: "",
            Calculator: "calculator/:slug",
        },
    },
};

function MobilePill({
    label,
    tone = "soft",
}: {
    label: string;
    tone?: "soft" | "warm" | "dark";
}) {
    const pillStyle = tone === "dark" ? styles.pillDark : tone === "warm" ? styles.pillWarm : styles.pillSoft;
    const textStyle = tone === "dark" ? styles.pillTextDark : tone === "warm" ? styles.pillTextWarm : styles.pillTextSoft;

    return (
        <View style={[styles.pill, pillStyle]}>
            <Text style={[styles.pillText, textStyle]}>{label}</Text>
        </View>
    );
}

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
            <View style={styles.cardAccent} />
            <View style={styles.cardHeader}>
                <MobilePill label="Mobile ready" tone="warm" />
                <Text style={styles.cardSlug}>{slug}</Text>
            </View>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
            <View style={styles.cardFooter}>
                <Text style={styles.cardAction}>Open calculator</Text>
                <Text style={styles.cardArrow}>-&gt;</Text>
            </View>
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

    const featuredCalculators = mobileCalculatorRegistry.slice(0, 4);
    <View style={styles.heroAccent} />
    return (
        <ScrollView
            contentContainerStyle={styles.page}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
        >
            <View style={styles.shellHeader}>
                <View style={styles.brandRow}>
                    <View style={styles.brandMark}>
                        <Text style={styles.brandMarkText}>NC</Text>
                    </View>
                    <View style={styles.brandCopy}>
                        <Text style={styles.brandLabel}>NobleCalculator</Text>
                        <Text style={styles.brandSubLabel}>Mobile calculator workspace</Text>
                    </View>
                </View>

                <MobilePill label="Deep link ready" tone="dark" />
            </View>

            <View style={styles.heroCard}>
                <View style={styles.heroAccent} />
                <Text style={styles.eyebrow}>Mobile registry</Text>
                <Text style={styles.title}>Choose a calculator</Text>
                <Text style={styles.description}>
                    Search across {mobileCalculatorRegistry.length} calculators and jump straight into a focused mobile flow.
                </Text>

                <View style={styles.heroStats}>
                    <View style={styles.heroStat}>
                        <Text style={styles.heroStatValue}>{mobileCalculatorRegistry.length}</Text>
                        <Text style={styles.heroStatLabel}>Tools live</Text>
                    </View>
                    <View style={styles.heroStat}>
                        <Text style={styles.heroStatValue}>{filteredCalculators.length}</Text>
                        <Text style={styles.heroStatLabel}>{normalizedQuery ? "Matches" : "Visible"}</Text>
                    </View>
                    <View style={styles.heroStat}>
                        <Text style={styles.heroStatValue}>{featuredCalculators.length}</Text>
                        <Text style={styles.heroStatLabel}>Quick picks</Text>
                    </View>
                </View>

                <TextInput
                    accessibilityLabel="Search calculators"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    onChangeText={onQueryChange}
                    placeholder="Search by title, slug, or use case"
                    placeholderTextColor="#9c8f7f"
                    style={styles.searchInput}
                    value={query}
                />
            </View>

            {!normalizedQuery ? (
                <View style={styles.sectionBlock}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionLabel}>Quick picks</Text>
                        <Text style={styles.sectionMeta}>Start here</Text>
                    </View>

                    <View style={styles.list}>
                        {featuredCalculators.map((calculator) => (
                            <MobileCalculatorCard
                                key={`featured-${calculator.slug}`}
                                slug={calculator.slug}
                                title={calculator.title}
                                description={calculator.description}
                                onPress={onOpenCalculator}
                            />
                        ))}
                    </View>
                </View>
            ) : null}

            <View style={styles.sectionBlock}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionLabel}>{normalizedQuery ? "Results" : "All tools"}</Text>
                    <Text style={styles.sectionMeta}>
                        {filteredCalculators.length} match{filteredCalculators.length === 1 ? "" : "es"}
                    </Text>
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
                            <Pressable accessibilityLabel="Clear calculator search" onPress={() => onQueryChange("")} style={styles.emptyAction}>
                                <Text style={styles.emptyActionText}>Clear search</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

function MobileCalculatorScreenView({
    calculator,
    onBack,
}: {
    calculator: MobileCalculatorEntry;
    onBack: () => void;
}) {
    const Screen = calculator.Screen;

    return (
        <ScrollView
            contentContainerStyle={styles.page}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
        >
            <Pressable accessibilityLabel="Back to registry" onPress={onBack} style={styles.backButton}>
                <Text style={styles.backButtonText}>Back to registry</Text>
            </Pressable>

            <View style={styles.detailHero}>
                <View style={styles.heroAccent} />
                <Text style={styles.eyebrow}>Selected calculator</Text>
                <Text style={styles.title}>{calculator.title}</Text>
                <Text style={styles.description}>{calculator.description}</Text>

                <View style={styles.heroMetaRow}>
                    <MobilePill label="Interactive form" tone="warm" />
                    <MobilePill label={calculator.slug} tone="soft" />
                </View>
            </View>

            <View style={styles.detailFrame}>
                <View style={styles.detailFrameHeader}>
                    <Text style={styles.sectionLabel}>Calculator view</Text>
                    <Text style={styles.sectionMeta}>Ready for input</Text>
                </View>

                <View style={styles.detailSurface}>
                    <Screen />
                </View>
            </View>
        </ScrollView>
    );
}

function RegistryRoute({ navigation }: NativeStackScreenProps<RootStackParamList, "Registry">) {
    const [query, setQuery] = useState("");

    return (
        <MobileRegistryScreen
            query={query}
            onQueryChange={setQuery}
            onOpenCalculator={(slug) => navigation.navigate("Calculator", { slug })}
        />
    );
}

function CalculatorRoute({ route, navigation }: NativeStackScreenProps<RootStackParamList, "Calculator">) {
    const calculator = getMobileCalculatorEntry(route.params.slug);

    if (!calculator) {
        return (
            <ScrollView
                contentContainerStyle={styles.page}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >
                <View style={styles.heroCard}>
                    <View style={styles.heroAccent} />
                    <Text style={styles.eyebrow}>Mobile registry</Text>
                    <Text style={styles.title}>Calculator not found</Text>
                    <Text style={styles.description}>This route is missing from the mobile registry.</Text>
                </View>

                <Pressable accessibilityLabel="Back to registry" onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back to registry</Text>
                </Pressable>
            </ScrollView>
        );
    }

    return <MobileCalculatorScreenView calculator={calculator} onBack={() => navigation.goBack()} />;
}

export function MobileApp() {
    return (
        <SafeAreaView style={styles.appShell}>
            <View pointerEvents="none" style={styles.glowTop} />
            <View pointerEvents="none" style={styles.glowBottom} />

            <StatusBar style="dark" />

            <View style={styles.navigator}>
                <NavigationContainer linking={linking}>
                    <Stack.Navigator
                        initialRouteName="Registry"
                        screenOptions={{
                            headerShown: false,
                            contentStyle: { backgroundColor: "transparent" },
                        }}
                    >
                        <Stack.Screen name="Registry" component={RegistryRoute} />
                        <Stack.Screen name="Calculator" component={CalculatorRoute} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
}

const styles = {
    appShell: {
        flex: 1,
        backgroundColor: "#f5efe6",
    },
    navigator: {
        flex: 1,
    },
    glowTop: {
        position: "absolute" as const,
        top: -120,
        right: -110,
        width: 260,
        height: 260,
        borderRadius: 999,
        backgroundColor: "rgba(138,107,69,0.16)",
    },
    glowBottom: {
        position: "absolute" as const,
        left: -130,
        bottom: -150,
        width: 320,
        height: 320,
        borderRadius: 999,
        backgroundColor: "rgba(27,26,23,0.06)",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "transparent",
    },
    page: {
        gap: 16,
        padding: 16,
        paddingBottom: 32,
        flexGrow: 1,
        backgroundColor: "#f5efe6",
    },
    shellHeader: {
        flexDirection: "row" as const,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        paddingHorizontal: 4,
    },
    brandRow: {
        flex: 1,
        minWidth: 0,
        flexDirection: "row" as const,
        alignItems: "center",
        gap: 12,
    },
    brandMark: {
        width: 42,
        height: 42,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1b1a17",
    },
    brandMarkText: {
        fontSize: 14,
        fontWeight: "800" as const,
        letterSpacing: 1.2,
        color: "#f8f3ea",
    },
    brandCopy: {
        flex: 1,
        minWidth: 0,
        gap: 2,
    },
    brandLabel: {
        fontSize: 14,
        fontWeight: "700" as const,
        color: "#1b1a17",
    },
    brandSubLabel: {
        fontSize: 12,
        color: "#6c655b",
    },
    pill: {
        alignSelf: "flex-start",
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    pillSoft: {
        backgroundColor: "rgba(138,107,69,0.12)",
    },
    pillWarm: {
        backgroundColor: "rgba(27,26,23,0.08)",
    },
    pillDark: {
        backgroundColor: "#1b1a17",
    },
    pillText: {
        fontSize: 11,
        fontWeight: "700" as const,
        letterSpacing: 1,
        textTransform: "uppercase" as const,
    },
    pillTextSoft: {
        color: "#8a6b45",
    },
    pillTextWarm: {
        color: "#1b1a17",
    },
    pillTextDark: {
        color: "#f8f3ea",
    },
    heroCard: {
        gap: 12,
        borderRadius: 28,
        padding: 20,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#fffdf9",
        shadowColor: "#1b1a17",
        shadowOpacity: 0.06,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 8 },
        elevation: 2,
    },
    heroAccent: {
        width: 64,
        height: 4,
        borderRadius: 999,
        backgroundColor: "#8a6b45",
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
    heroStats: {
        flexDirection: "row" as const,
        flexWrap: "wrap" as const,
        gap: 10,
    },
    heroStat: {
        flexGrow: 1,
        flexBasis: 0,
        minWidth: 96,
        gap: 2,
        borderRadius: 18,
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#f8f3ea",
    },
    heroStatValue: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "700" as const,
        color: "#1b1a17",
    },
    heroStatLabel: {
        fontSize: 12,
        fontWeight: "600" as const,
        color: "#6c655b",
    },
    searchInput: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 18,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderColor: "rgba(27,26,23,0.12)",
        backgroundColor: "#ffffff",
        color: "#1b1a17",
        fontSize: 16,
    },
    sectionBlock: {
        gap: 12,
    },
    sectionHeader: {
        flexDirection: "row" as const,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
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
        gap: 10,
        width: "100%",
        borderRadius: 24,
        padding: 16,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#fffdf9",
        shadowColor: "#1b1a17",
        shadowOpacity: 0.05,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 1,
    },
    cardAccent: {
        width: 52,
        height: 4,
        borderRadius: 999,
        backgroundColor: "rgba(138,107,69,0.8)",
    },
    cardHeader: {
        flexDirection: "row" as const,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },
    cardTitle: {
        fontSize: 17,
        lineHeight: 23,
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
    cardFooter: {
        flexDirection: "row" as const,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },
    cardAction: {
        fontSize: 13,
        fontWeight: "700" as const,
        color: "#8a6b45",
    },
    cardArrow: {
        fontSize: 16,
        fontWeight: "700" as const,
        color: "#1b1a17",
    },
    emptyState: {
        gap: 8,
        borderRadius: 24,
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
    emptyAction: {
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
    emptyActionText: {
        fontSize: 14,
        fontWeight: "700" as const,
        color: "#1b1a17",
    },
    backButton: {
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#fffdf9",
        shadowColor: "#1b1a17",
        shadowOpacity: 0.04,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 1,
    },
    backButtonText: {
        fontSize: 14,
        fontWeight: "700" as const,
        color: "#1b1a17",
    },
    detailHero: {
        gap: 12,
        borderRadius: 28,
        padding: 20,
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#fffdf9",
        shadowColor: "#1b1a17",
        shadowOpacity: 0.06,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 8 },
        elevation: 2,
    },
    heroMetaRow: {
        flexDirection: "row" as const,
        flexWrap: "wrap" as const,
        gap: 8,
    },
    detailFrame: {
        gap: 12,
    },
    detailFrameHeader: {
        flexDirection: "row" as const,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        paddingHorizontal: 4,
    },
    detailSurface: {
        borderRadius: 28,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "rgba(27,26,23,0.08)",
        backgroundColor: "#f8f3ea",
    },
} as const;