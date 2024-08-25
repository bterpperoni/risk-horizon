

export { ButtonProps, ButtonPropsGeneric, GenericFormValues }


declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean
    }
  }
}



interface GenericFormValues {
  address: string;
  city: string;
  country: string;
  zipCode: string;
  phone: string;
  gender: Gender;
  organization: string;
  calledAction: string;
}

export enum Gender {
  MASCULIN,
  FEMININ
}


// Path: src/lib/components/ui/buttons/Button.tsx & ButtonGeneric  --------------------------------------

type ButtonPropsGeneric = {
  href?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>


interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}





