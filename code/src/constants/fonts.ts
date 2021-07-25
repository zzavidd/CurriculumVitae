import { HTMLFontFace } from 'jspdf';

const FONT_FACES: HTMLFontFace[] = [
  createFontFace('Regular'),
  createFontFace('Bold', { weight: 'bold' }),
  createFontFace('Italic', { style: 'italic' }),
  createFontFace('BoldItalic', { style: 'italic', weight: 'bold' })
];

function createFontFace(
  suffix: string,
  fontFaceOptions?: { [key: string]: any }
): HTMLFontFace {
  return {
    family: 'Montserrat',
    ...fontFaceOptions,
    src: [
      {
        url: `/fonts/Montserrat-${suffix}.ttf`,
        format: 'truetype'
      }
    ]
  };
}

export default FONT_FACES;
