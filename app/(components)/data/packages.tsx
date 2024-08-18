import { JSXElementConstructor, ReactElement } from "react"
import ButtonGroup from "../subcomponents/ButtonGroup"
export const packages: Record<string, Record<string, any>[]> = {
  monthly: [
    {
      id: 1,
      name: "Free Plan",
      description: "For Small teams or office",
      buttonText: "Start free trial",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: "tick.svg",
          text: "Drag & Drop Builder",
          isAvailable: true
        },
        {
          id: 2,
          icon: "tick.svg",
          text: "1000s of Templates",
          isAvailable: true
        },
        {
          id: 3,
          icon: "tick.svg",
          text: "Blog Support Tools",
          isAvailable: true
        },
        {
          id: 4,
          icon: "tick.svg",
          text: "eCommerce Store",
          isAvailable: true
        }
      ]
    },
    {
      id: 2,
      name: "Business King",
      description: "For Enterprise Business",
      buttonText: "Create Account",
      priceWithUnit: "$15",
      additionalButtonOption: "Or Start 14 Days trial",
      points: [
        {
          id: 1,
          icon: "tick.svg",
          text: "Drag & Drop Builder",
          isAvailable: true
        },
        {
          id: 2,
          icon: "tick.svg",
          text: "1000s of Templates",
          isAvailable: true
        },
        {
          id: 3,
          icon: "tick.svg",
          text: "Blog Support Tools",
          isAvailable: true
        },
        {
          id: 4,
          icon: "tick.svg",
          text: "eCommerce Store",
          isAvailable: true
        }
      ]
    },
    {
      id: 3,
      header: "Suggested",
      name: "Pro Master",
      description: "For Pro Level Developers",
      buttonText: "Create Account",
      priceWithUnit: "$24",
      additionalButtonOption: "Or Start 14 Days trial",
      points: [
        {
          id: 1,
          icon: "tick.svg",
          text: "Drag & Drop Builder",
          isAvailable: true
        },
        {
          id: 2,
          icon: "tick.svg",
          text: "1000s of Templates",
          isAvailable: true
        },
        {
          id: 3,
          icon: "tick.svg",
          text: "Blog Support Tools",
          isAvailable: true
        },
        {
          id: 4,
          icon: "tick.svg",
          text: "eCommerce Store",
          isAvailable: true
        }
      ]
    }
  ],
  annual: [
    {
      id: 1,
      name: "Free Plan",
      description: "For Small teams or office",
      buttonText: "Start free trial",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: "tick.svg",
          text: "Drag & Drop Builder",
          isAvailable: true
        },
        {
          id: 2,
          icon: "tick.svg",
          text: "1000s of Templates",
          isAvailable: true
        },
        {
          id: 3,
          icon: "tick.svg",
          text: "Blog Support Tools",
          isAvailable: true
        },
        {
          id: 4,
          icon: "tick.svg",
          text: "eCommerce Store",
          isAvailable: true
        }
      ]
    },
    {
      id: 2,
      name: "Business King",
      description: "For Enterprise Business",
      buttonText: "Create Account",
      priceWithUnit: "$25",
      additionalButtonOption: "Or Start 14 Days trial",
      points: [
        {
          id: 1,
          icon: "tick.svg",
          text: "Drag & Drop Builder",
          isAvailable: true
        },
        {
          id: 2,
          icon: "tick.svg",
          text: "1000s of Templates",
          isAvailable: true
        },
        {
          id: 3,
          icon: "tick.svg",
          text: "Blog Support Tools",
          isAvailable: true
        },
        {
          id: 4,
          icon: "tick.svg",
          text: "eCommerce Store",
          isAvailable: true
        }
      ]
    },
    {
      id: 3,
      header: "Suggested",
      name: "Pro Master",
      description: "For Pro Level Developers",
      buttonText: "Create Account",
      priceWithUnit: "$39",
      additionalButtonOption: "Or Start 14 Days trial",
      points: [
        {
          id: 1,
          icon: "tick.svg",
          text: "Drag & Drop Builder",
          isAvailable: true
        },
        {
          id: 2,
          icon: "tick.svg",
          text: "1000s of Templates",
          isAvailable: true
        },
        {
          id: 3,
          icon: "tick.svg",
          text: "Blog Support Tools",
          isAvailable: true
        },
        {
          id: 4,
          icon: "tick.svg",
          text: "eCommerce Store",
          isAvailable: true
        }
      ]
    }
  ]
}

export const responsive: Record<string, any> = {
  desktop: {
    breakpoint: { max: 3000, min: 1024},
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640},
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0},
    items: 1,
    draggable: true,
  }
}


  //SLIDER PARAMS
  export const sliderParams = {
    additionalTransform: 0,
    arrow: false,
    autoPlaySpeed: 3000,
    customButtonGroup: <ButtonGroup/>,
    centerMode: false,
    className: "",
    containerClass: "carousel-container w-full",
    dotListClass: "",
    focusOnSelect: false,
    removeArrowOnDeviceType: ["tablet", "mobile"],
    infinite: false,
    items: 3,
    itemClass: "py-16",
    keyBoardControl: false,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    ssr: true,
  }
