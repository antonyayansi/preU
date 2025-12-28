import { definePreset, updatePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara';

export const PreTheme = definePreset(Lara, {
    semantic: {
        primary: {
            50: '{sky.50}',
            100: '{sky.100}',
            200: '{sky.200}',
            300: '{sky.300}',
            400: '{sky.400}',
            500: '{sky.500}',
            600: '{sky.600}',
            700: '{sky.700}',
            800: '{sky.800}',
            900: '{sky.900}',
            950: '{sky.950}'
        },
        // focusRing: {
        //     width: '1px',
        //     style: 'solid',
        //     color: '{primary.color}',
        //     offset: '0px'
        // }
    },
    colorScheme: {
        light: {
            surface: {
                0: '#ffffff',
                50: '{zinc.50}',
                100: '{zinc.100}',
                200: '{zinc.200}',
                300: '{zinc.300}',
                400: '{zinc.400}',
                500: '{zinc.500}',
                600: '{zinc.600}',
                700: '{zinc.700}',
                800: '{zinc.800}',
                900: '{zinc.900}',
                950: '{zinc.950}'
            }
        },
        dark: {
            surface: {
                0: '#ffffff',
                50: '{zinc.50}',
                100: '{zinc.100}',
                200: '{zinc.200}',
                300: '{zinc.300}',
                400: '{zinc.400}',
                500: '{zinc.500}',
                600: '{zinc.600}',
                700: '{zinc.700}',
                800: '{zinc.800}',
                900: '{zinc.900}',
                950: '{zinc.950}'
            }
        }
    },
    extend: {
        transitionDuration: '0ms',
    }
});

export const updateTheme = (theme) => {
    updatePreset({
        semantic: {
            primary: {
                50: `{${theme}.50}`,
                100: `{${theme}.100}`,
                200: `{${theme}.200}`,
                300: `{${theme}.300}`,
                400: `{${theme}.400}`,
                500: `{${theme}.500}`,
                600: `{${theme}.600}`,
                700: `{${theme}.700}`,
                800: `{${theme}.800}`,
                900: `{${theme}.900}`,
                950: `{${theme}.950}`
            }
        }
    })
}