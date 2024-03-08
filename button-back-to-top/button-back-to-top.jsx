'use client';

import { Button } from '@/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';

/**
 * Renders a button component that scrolls the page to the top when clicked.
 *
 * @param buttonText - The text to display on the button. Default is 'Back to top'.
 * @param showArrowIcon - Determines whether to show an arrow icon next to the button text. Default is true.
 * @param className - Additional CSS class names to apply to the button.
 * @param variant - The variant of the button. Default is 'secondary'.
 */
export default function Button_BackToTop({
	buttonText = 'Back to top',
	showArrowIcon = true,
	className,
	variant,
}) {
	return (
		<Button
			className={cn('fixed bottom-4 right-4 z-50', className)}
			onClick={() => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}}
			variant={variant || 'secondary'}
		>
			{buttonText}
			{showArrowIcon && <ArrowUp size={18} className="pl-1" />}
		</Button>
	);
}
