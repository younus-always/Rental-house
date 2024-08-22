      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
          extend: {
            colors: {
                bg_primary: "rgb(171, 239, 95)",
                secondary: 'rgb(30, 30, 30)',
                bg_light: 'rgba(171, 239, 95, 0.2)',
                // work process color
                first_clr: 'rgba(171, 239, 95, 0.2)',
                second_clr: 'rgb(239, 218, 110)',
                third_clr: 'rgb(164, 218, 195)',
                fourth_clr: 'rgb(119, 170, 234)',
            },
            fontFamily: {
                display: 'Manrope',
            },
          },
        },
        plugins: [],
      };