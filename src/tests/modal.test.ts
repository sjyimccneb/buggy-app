import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/vue';
import ModalComponent from '@/components/TheModalWindow.vue';

describe('ModalComponent', () => {
    let utils: any;

    beforeEach(() => {
        utils = render(ModalComponent, {
            props: {
                show: false,
            },
        });
    });

    afterEach(() => {
        cleanup(); // Clean up the DOM and unmount the component after each test
    });

    it('renders when show is true', async () => {
      utils.rerender({ show: true });
  
      expect(screen.queryByText('Table users')).toBeDefined();
    });
  
    it('does not render when show is false', () => {
      utils.rerender({ show: false });
  
      expect(screen.queryByText('Table users')).toBeNull();
    });
  
    it('emits update:show when close button is clicked', async () => {
        const { emitted } = render(ModalComponent, {
          props: {
            show: true,
          },
        });
    
        const closeButton = screen.getByText('Close');
        await fireEvent.click(closeButton);
    
        expect(emitted()['update:show']).toBeTruthy();
        expect(emitted()['update:show'][0]).toEqual([false]);
      });
});
