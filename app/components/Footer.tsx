export default function Footer() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-6">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    <h3 className="font-semibold mb-3">Product</h3>
                    <ul className="space-y-2">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Documentation</li>
                    </ul>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2">
                        <li>Community</li>
                        <li>Contact</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    <h3 className="font-semibold mb-3">Legal</h3>
                    <ul className="space-y-2">
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>License</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-900/10 dark:border-gray-50/[0.06] text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    © 2024 My App. All rights reserved.
                </p>
            </div>
        </>
    );
} 