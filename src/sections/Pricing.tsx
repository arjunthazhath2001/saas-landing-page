import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container">
        {/* title and para */}
        <div className="md:max-w-[540px] mx-auto">
          <h1 className="title">Pricing</h1>
          <p className="lines mt-4">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>

        {/* all cards */}
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div className={twMerge("p-10 border-4 rounded-3xl shadow-[0_3px_4px_gray] max-w-xs w-full", inverse===true && 'border-black bg-black text-white')}>
                <div className="flex justify-between">
                  
                  <h3 className={twMerge("text-lg font-bold text-black/50", inverse===true && 'text-white/50')}>{title}</h3>

                  {popular===true && (
                    <div className="inline-flex text-sm py-1.5 px-4 rounded-xl border border-white/20">
                      <span className="bg-[linear-gradient(to_right,pink,blue,yellow,green)] text-transparent bg-clip-text font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className={twMerge("tracking-tight font-bold text-black/50", inverse===true && 'text-white/50')}>
                    /month
                  </span>
                </div>
                <button className={twMerge("btn btn-primary font-medium w-full mt-[30px]", inverse===true && 'btn bg-white font-medium text-black')}>
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-[30px]">
                  {features.map((feature) => (
                    <li className="text-sm items-center flex gap-4">
                      <CheckIcon className="w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
