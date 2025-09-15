import '@assets/css/style.css';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import type { Preview } from '@storybook/vue3';

config.autoAddCss = true;
library.add(fas, fab);

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'todo' },
  },
  decorators: [
    (Story, context) => ({
      setup() {
        const isDark = context.globals?.darkMode === 'dark';
        return { isDark };
      },
      template: `<div><story/></div>`,
      components: { story: Story },
    }),
  ],
};

export default preview;
