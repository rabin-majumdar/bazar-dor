"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

type SocialProps = {
    onGoogleSignIn: () => void;
    onGitHubSignIn: () => void;
    isLoading?: boolean;
};

export default function Social({
    onGoogleSignIn,
    onGitHubSignIn,
    isLoading = false,
}: SocialProps) {
    return (
        <div className="flex w-full min-w-0 gap-3 flex-row">
            <Button
                className="w-full min-w-0 flex-1"
                variant="tertiary"
                onPress={onGoogleSignIn}
                isDisabled={isLoading}
            >
                <Icon icon="devicon:google" width={20} />
                Google
            </Button>

            <Button
                className="w-full min-w-0 flex-1"
                variant="tertiary"
                onPress={onGitHubSignIn}
                isDisabled={isLoading}
            >
                <Icon icon="mdi:github" width={20} />
                GitHub
            </Button>
        </div>
    );
}