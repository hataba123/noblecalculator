"use client";

import {
    forwardRef,
    type ChangeEvent,
    type CSSProperties,
    type Ref,
    type ReactNode,
} from "react";

export type ViewProps = {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    testID?: string;
};

export const View = forwardRef<HTMLDivElement, ViewProps>(function View({ children, className, style, testID }, ref) {
    return (
        <div
            ref={ref}
            className={className}
            data-testid={testID}
            style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                ...style,
            }}
        >
            {children}
        </div>
    );
});

View.displayName = "View";

export type TextProps = {
    children?: ReactNode;
    className?: string;
    accessibilityLabel?: string;
    style?: CSSProperties;
    testID?: string;
};

export const Text = forwardRef<HTMLSpanElement, TextProps>(function Text({ children, className, accessibilityLabel, style, testID }, ref) {
    return (
        <span
            ref={ref}
            aria-label={accessibilityLabel}
            className={className}
            data-testid={testID}
            style={{
                boxSizing: "border-box",
                color: "inherit",
                font: "inherit",
                whiteSpace: "pre-wrap",
                ...style,
            }}
        >
            {children}
        </span>
    );
});

Text.displayName = "Text";

export type KeyboardType = "default" | "email-address" | "numeric" | "phone-pad" | "search" | "url";

export type TextInputProps = {
    accessibilityLabel?: string;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    className?: string;
    defaultValue?: string;
    editable?: boolean;
    keyboardType?: KeyboardType;
    multiline?: boolean;
    name?: string;
    numberOfLines?: number;
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChangeText?: (nextValue: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    style?: CSSProperties;
    testID?: string;
    value?: string;
};

function resolveInputType(keyboardType: KeyboardType | undefined, secureTextEntry: boolean | undefined) {
    if (secureTextEntry) {
        return "password";
    }

    switch (keyboardType) {
        case "email-address":
            return "email";
        case "numeric":
            return "number";
        case "phone-pad":
            return "tel";
        case "search":
            return "search";
        case "url":
            return "url";
        default:
            return "text";
    }
}

export const TextInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextInputProps>(function TextInput(
    {
        accessibilityLabel,
        autoCapitalize,
        autoCorrect = true,
        className,
        defaultValue,
        editable = true,
        keyboardType,
        multiline = false,
        name,
        numberOfLines,
        onChange,
        onChangeText,
        placeholder,
        secureTextEntry,
        style,
        testID,
        value,
    },
    ref,
) {
    const commonProps = {
        "aria-label": accessibilityLabel,
        "aria-readonly": editable ? undefined : true,
        autoCapitalize,
        autoCorrect: autoCorrect ? "on" : "off",
        className,
        "data-testid": testID,
        defaultValue,
        name,
        onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            onChange?.(event);
            onChangeText?.(event.currentTarget.value);
        },
        placeholder,
        readOnly: !editable,
        style: {
            boxSizing: "border-box",
            font: "inherit",
            ...style,
        },
        value,
    } as const;

    if (multiline) {
        return (
            <textarea
                ref={ref as Ref<HTMLTextAreaElement>}
                rows={numberOfLines}
                {...commonProps}
            />
        );
    }

    return (
        <input
            ref={ref as Ref<HTMLInputElement>}
            type={resolveInputType(keyboardType, secureTextEntry)}
            {...commonProps}
        />
    );
});

TextInput.displayName = "TextInput";

export type PressableProps = {
    accessibilityLabel?: string;
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    onPress?: () => void;
    onPressIn?: () => void;
    onPressOut?: () => void;
    style?: CSSProperties;
    testID?: string;
    type?: "button" | "reset" | "submit";
};

export const Pressable = forwardRef<HTMLButtonElement, PressableProps>(function Pressable(
    {
        accessibilityLabel,
        children,
        className,
        disabled = false,
        onPress,
        onPressIn,
        onPressOut,
        style,
        testID,
        type = "button",
    },
    ref,
) {
    return (
        <button
            ref={ref}
            aria-label={accessibilityLabel}
            className={className}
            data-testid={testID}
            disabled={disabled}
            onClick={() => {
                if (!disabled) {
                    onPress?.();
                }
            }}
            onPointerDown={() => {
                if (!disabled) {
                    onPressIn?.();
                }
            }}
            onPointerUp={() => {
                if (!disabled) {
                    onPressOut?.();
                }
            }}
            style={{
                boxSizing: "border-box",
                cursor: disabled ? "default" : "pointer",
                font: "inherit",
                touchAction: "manipulation",
                userSelect: "none",
                ...style,
            }}
            type={type}
        >
            {children}
        </button>
    );
});

Pressable.displayName = "Pressable";