import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import CardComponent from '@/components/TheCard.vue';

describe('CardComponent', () => {
  it('renders the title and slots correctly', async () => {
    render(CardComponent, {
      props: {
        title: 'Test Title',
      },
      slots: {
        'title-buttons': 'Test Button',
        'content': 'Test Content',
        'footer': 'Test Footer',
      },
    });

    expect(screen.getByText('Test Title')).toBeDefined();
    expect(screen.getByText('Test Button')).toBeDefined();
    expect(screen.getByText('Test Content')).toBeDefined();
    expect(screen.getByText('Test Footer')).toBeDefined();
  });

});
