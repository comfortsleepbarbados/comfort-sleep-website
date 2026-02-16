import React from 'react';
import Link from 'next/link';

interface CTAButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary';
}

interface CallToActionProps {
  title: string;
  description?: string;
  buttons: CTAButton[];
  gradient?: boolean;
  backgroundColor?: string;
}

export default function CallToAction({
  title,
  description,
  buttons,
  gradient = false,
  backgroundColor = 'bg-[#25278C]',
}: CallToActionProps) {
  const bgClass = gradient
    ? 'bg-gradient-to-br from-[#25278C] to-[#1a1c66]'
    : backgroundColor;

  return (
    <section className={`py-20 ${bgClass} text-white`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        {description && (
          <p className="text-xl mb-8 text-gray-200">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((button, index) => {
            const buttonClass =
              button.variant === 'primary'
                ? 'bg-white hover:bg-gray-100 text-[#25278C]'
                : 'border-2 border-white hover:bg-white hover:text-[#25278C] text-white';

            const content = (
              <span className="px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block">
                {button.label}
              </span>
            );

            if (button.href) {
              return (
                <Link key={index} href={button.href} className={buttonClass}>
                  {content}
                </Link>
              );
            }

            return (
              <button
                key={index}
                onClick={button.onClick}
                className={buttonClass}
              >
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
