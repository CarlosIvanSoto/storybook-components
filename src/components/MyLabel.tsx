import React from 'react'
import { AllCaps } from '../stories/components/MyLabel.stories'
import './mylabel.css'

export interface Props {
  /**
   * Contenido del texto
   */
	label: string
  /**
   * Tamaño del texto
   */
	size?: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * Texto en mayusculas
   */
	allCaps?: boolean
  /**
   * Color del texto
   */
	color?: 'primary' | 'secondary' | 'tertiary' 
  /**
   * Color del texto
   */
  fontColor?: string;
}

export const MyLabel = ({
    label = 'Hello Worlds', 
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor,
	}: Props) => {
	return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor}}>
			{
				allCaps
				? label.toLocaleUpperCase()
				: label
			}
		</span>
  )
}
