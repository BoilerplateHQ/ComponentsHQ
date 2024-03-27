'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { capitalize, cn } from '@/lib/utils';
import { ChevronRight, HomeIcon } from 'lucide-react';

/**
 * Renders a breadcrumb component that displays the current page's path.
 * @returns The breadcrumb component.
 */
export default function Breadcrumps() {
	const pathname = usePathname();
	const pathArray = pathname.split('/');

	return (
		<div className="flex items-center py-4 text-sm text-muted-foreground space-x-2 bg-white w-[400px] h-[250px] justify-center">
			<div className="text-ellipsis whitespace-nowrap">
				<Link href="/" aria-describedby="home button">
					<HomeIcon className="h-4 w-4" />
				</Link>
			</div>
			{pathArray.length > 1
				? pathArray.slice(1).map((path, index) => (
						<div key={path} className="flex items-center">
							<ChevronRight className="h-4 w-4" />
							<div
								className={cn(
									pathArray.length - 2 === index
										? 'font-medium text-foreground'
										: 'text-sm text-muted-foreground'
								)}
							>
								<Link href={pathArray.slice(0, index + 2).join('/')}>
									{path
										.split('-')
										.map((w) => capitalize(w))
										.join(' ')}
								</Link>
							</div>
						</div>
				  ))
				: null}
		</div>
	);
}
