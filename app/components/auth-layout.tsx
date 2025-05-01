import { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Welcome back
                    </h2>
                </div>
                {children}
            </div>
        </div>
    )
} 