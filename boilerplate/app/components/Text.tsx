import i18n from "i18n-js"
import React from "react"
import { TextStyle } from "react-native"
import { Text as NativeText, ITextProps as INativeTextProps } from "native-base"
import { isRTL, translate, TxKeyPath } from "../i18n"

export interface TextProps extends INativeTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: i18n.TranslateOptions
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Children components.
   */
  children?: React.ReactNode
}

/**
 * For your text displaying needs.
 */
export function Text(props: TextProps) {
  const { tx, txOptions, text, children, ...rest } = props

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {}

  return (
    <NativeText {...rest} style={{ ...$rtlStyle }}>
      {content}
    </NativeText>
  )
}
