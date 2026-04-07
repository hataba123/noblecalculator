import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";
import {
    Pressable as RNPressable,
    Text as RNText,
    TextInput as RNTextInput,
    View as RNView,
    type TextInputProps as RNTextInputProps,
} from "react-native";

export type ViewProps = ComponentPropsWithoutRef<typeof RNView>;

export const View = forwardRef<ElementRef<typeof RNView>, ViewProps>(function View(props, ref) {
    return <RNView ref={ref} {...props} />;
});

View.displayName = "View";

export type TextProps = ComponentPropsWithoutRef<typeof RNText>;

export const Text = forwardRef<ElementRef<typeof RNText>, TextProps>(function Text(props, ref) {
    return <RNText ref={ref} {...props} />;
});

Text.displayName = "Text";

export type KeyboardType = RNTextInputProps["keyboardType"];

export type TextInputProps = ComponentPropsWithoutRef<typeof RNTextInput>;

export const TextInput = forwardRef<ElementRef<typeof RNTextInput>, TextInputProps>(function TextInput(props, ref) {
    return <RNTextInput ref={ref} {...props} />;
});

TextInput.displayName = "TextInput";

export type PressableProps = ComponentPropsWithoutRef<typeof RNPressable>;

export const Pressable = forwardRef<ElementRef<typeof RNPressable>, PressableProps>(function Pressable(props, ref) {
    return <RNPressable ref={ref} {...props} />;
});

Pressable.displayName = "Pressable";