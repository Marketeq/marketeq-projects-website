"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn, fromLength } from "@/utils/functions"
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award01,
  Briefcase,
  Certificate01,
  ChartBreakoutCircle,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Cloud01,
  CoinStack,
  CubeOutline,
  File,
  File02,
  Globe,
  Instagram,
  IntersectCircle,
  Laptop01,
  MarkerPin02,
  MessageSquare01,
  Monitor03,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  SearchRefraction,
  ShieldZap,
  Speedometer04,
  Star,
  Stars02,
  Tool02,
  User,
  UserCircle,
  Users,
  Users03,
} from "@blend-metrics/icons"
import {
  AdobeBrand,
  GoogleBrand,
  WordpressBrand,
} from "@blend-metrics/icons/brands"
import { LinkedInSolid, TwitterSolid } from "@blend-metrics/icons/social-solid"
import * as Popover from "@radix-ui/react-popover"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { SwiperSlide } from "swiper/react"
import {
  ArkPopoverContent,
  ArkPopoverRoot,
} from "@/components/ui/ark-popover/ark-popover"
import { Facebook, Logo } from "@/components/icons"
import { Money } from "@/components/icons"
import { Particles } from "@/components/icons/particles"
import {
  SwiperContent,
  SwiperNextTrigger,
  SwiperPrevTrigger,
  SwiperRoot,
} from "@/components/swiper"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Favorite,
  HeadlessRadioGroupItem,
  IconButton,
  RadioGroup,
  ScrollArea,
  ScrollBar,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui"

const SearchIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={cn("size-[34px]", className)}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29.7493 29.75L23.5868 23.5875M15.5826 8.5C19.4946 8.5 22.6659 11.6713 22.6659 15.5833M26.9159 15.5833C26.9159 21.8426 21.8418 26.9167 15.5826 26.9167C9.32337 26.9167 4.24927 21.8426 4.24927 15.5833C4.24927 9.32411 9.32337 4.25 15.5826 4.25C21.8418 4.25 26.9159 9.32411 26.9159 15.5833Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CroppedMarketeqLogo = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={cn("w-[690px] h-[258px]", className)}
    viewBox="0 0 690 258"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.04}>
      <path
        d="M749.178 292.365C718.198 292.365 690.8 276.18 660.715 256.4C642.317 244.274 620.831 237.724 598.824 237.533C576.818 237.342 555.222 243.517 536.617 255.321C506.175 273.303 476.09 293.084 440.813 293.084H429.71C403.549 292.842 378.337 283.209 358.631 265.927C338.926 248.646 326.027 224.855 322.266 198.856L321.729 183.391C321.985 164.495 326.908 145.958 336.055 129.443L379.032 53.9165L405.893 101.211L375.451 153C370.174 162.431 367.445 173.082 367.533 183.899C367.621 194.716 370.524 205.321 375.954 214.664C381.384 224.006 389.152 231.76 398.487 237.157C407.823 242.554 418.401 245.406 429.173 245.43H441.887C487.909 244.531 517.456 191.483 597.86 191.483C675.22 191.483 705.305 246.329 748.282 246.329C757.851 246.627 767.326 244.351 775.725 239.737C784.124 235.123 791.143 228.34 796.055 220.088C800.967 211.836 803.594 202.416 803.664 192.802C803.734 183.189 801.245 173.731 796.453 165.408L636.898 -116.018C631.432 -125.461 623.594 -133.298 614.167 -138.745C604.739 -144.193 594.053 -147.059 583.176 -147.059C572.3 -147.059 561.614 -144.193 552.186 -138.745C542.759 -133.298 534.92 -125.461 529.454 -116.018L464.988 -4.34685L438.127 -51.4611L487.909 -139.216C497.442 -155.918 511.197 -169.796 527.783 -179.447C544.37 -189.099 563.2 -194.182 582.371 -194.182C601.541 -194.182 620.371 -189.099 636.958 -179.447C653.544 -169.796 667.299 -155.918 676.832 -139.216L836.387 141.491C845.102 156.831 849.654 174.199 849.588 191.859C849.523 209.519 844.841 226.853 836.013 242.127C827.184 257.4 814.517 270.079 799.279 278.895C784.04 287.711 766.764 292.356 749.178 292.365Z"
        fill="#306CFE"
      />
      <path
        opacity={0.5}
        d="M519.635 150.68C516.591 143.487 356.857 -137.041 355.783 -138.659C346.25 -155.361 332.495 -169.239 315.909 -178.891C299.322 -188.542 280.492 -193.625 261.322 -193.625C242.151 -193.625 223.321 -188.542 206.735 -178.891C190.148 -169.239 176.393 -155.361 166.86 -138.659L13.7522 129.46C4.55185 146.003 -0.186694 164.671 0.00562952 183.618C0.197953 202.564 5.31447 221.132 14.8487 237.483C24.3829 253.833 38.0042 267.4 54.3643 276.84C70.7243 286.28 89.2557 291.265 108.124 291.303H119.406C155.22 291.303 184.768 271.702 215.21 253.54C228.518 245.488 243.29 240.181 258.663 237.927C274.036 235.673 289.703 236.518 304.747 240.412C297.509 224.676 293.258 207.723 292.212 190.421C257.569 186.951 222.721 194.567 192.647 212.18C56.0136 291.663 31.4805 192.759 53.6856 151.938L206.615 -117.799C212.081 -127.242 219.919 -135.079 229.346 -140.526C238.774 -145.974 249.46 -148.841 260.337 -148.841C271.213 -148.841 281.9 -145.974 291.327 -140.526C300.754 -135.079 308.593 -127.242 314.059 -117.799L421.503 70.4776L437.978 99.6093C470.032 156.794 480.956 170.101 480.956 186.824C481.571 190.636 481.571 194.522 480.956 198.333C495.551 188.732 511.02 180.543 527.157 173.877C525.602 165.865 523.076 158.075 519.635 150.68Z"
        fill="#306CFE"
      />
    </g>
  </svg>
)

export default function Landing() {
  const [areTopSkillsNotVisible, setAreTopSkillsNotVisible] =
    React.useState(true)
  const [areCategoriesNotVisible, setAreCategoriesNotVisible] =
    React.useState(true)
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="bg-black">
      <ArkPopoverRoot
        open={isOpen}
        onOpenChange={(details) => setIsOpen(details.open)}
      >
        <ArkPopoverContent className="bg-black min-h-[calc(100vh-56px)] overflow-y-auto scrollbar-thumb-gray-300 lg:min-h-[calc(100vh-70px)] rounded-lg px-0 before:absolute before:inset-0 before:rounded-lg before:content-[''] before:bg-primary-500/10">
          <div className="relative p-3.5 lg:p-5">
            <input
              className="focus-visible:outline-none h-12 bg-transparent border-0 w-full inline-block focus:ring-0 px-3.5 py-5 text-lg lg:text-[22px] leading-none text-white/[.25]"
              placeholder="Search by language or country"
            />

            <div className="h-12 lg:h-[52px] mt-5 rounded-[5px] flex items-center justify-between border-b border-white/20 px-3.5">
              <div className="flex items-center gap-x-4">
                <div className="w-[34px] shrink-0 h-[24px] bg-red-500 rounded-[4px]"></div>
                <h1 className="text-sm lg:text-base font-bold leading-none text-white">
                  Albania & Kosovo -{" "}
                  <span className="font-medium">English</span>
                </h1>
              </div>

              <Check className="size-5 text-white" />
            </div>

            <RadioGroup className="mt-5">
              <HeadlessRadioGroupItem
                value="India"
                className="h-12 lg:h-[52px] cursor-pointer focus-visible:outline-none px-3.5 rounded-[5px] border border-transparent hover:border-primary-500 hover:bg-primary-500/20"
              >
                <div className="flex items-center gap-x-3.5">
                  <div className="w-[34px] shrink-0 h-[24px] bg-red-500 rounded-[4px]"></div>
                  <h1 className="text-sm lg:text-base font-bold leading-none text-white">
                    Albania & Kosovo -{" "}
                    <span className="font-medium">English</span>
                  </h1>
                </div>
              </HeadlessRadioGroupItem>
              <HeadlessRadioGroupItem
                value="India"
                className="h-12 lg:h-[52px] cursor-pointer focus-visible:outline-none px-3.5 rounded-[5px] border border-transparent hover:border-primary-500 hover:bg-primary-500/20"
              >
                <div className="flex items-center gap-x-3.5">
                  <div className="w-[34px] shrink-0 h-[24px] bg-red-500 rounded-[4px]"></div>
                  <h1 className="text-sm lg:text-base font-bold leading-none text-white">
                    Albania & Kosovo -{" "}
                    <span className="font-medium">English</span>
                  </h1>
                </div>
              </HeadlessRadioGroupItem>
              <HeadlessRadioGroupItem
                value="India"
                className="h-12 lg:h-[52px] cursor-pointer focus-visible:outline-none px-3.5 rounded-[5px] border border-transparent hover:border-primary-500 hover:bg-primary-500/20"
              >
                <div className="flex items-center gap-x-3.5">
                  <div className="w-[34px] shrink-0 h-[24px] bg-red-500 rounded-[4px]"></div>
                  <h1 className="text-sm lg:text-base font-bold leading-none text-white">
                    Albania & Kosovo -{" "}
                    <span className="font-medium">English</span>
                  </h1>
                </div>
              </HeadlessRadioGroupItem>
              <HeadlessRadioGroupItem
                value="India"
                className="h-12 lg:h-[52px] cursor-pointer focus-visible:outline-none px-3.5 rounded-[5px] border border-transparent hover:border-primary-500 hover:bg-primary-500/20"
              >
                <div className="flex items-center gap-x-3.5">
                  <div className="w-[34px] shrink-0 h-[24px] bg-red-500 rounded-[4px]"></div>
                  <h1 className="text-sm lg:text-base font-bold leading-none text-white">
                    Albania & Kosovo -{" "}
                    <span className="font-medium">English</span>
                  </h1>
                </div>
              </HeadlessRadioGroupItem>
            </RadioGroup>
          </div>
        </ArkPopoverContent>
      </ArkPopoverRoot>

      <div className="min-h-screen bg-primary-500/10 isolate">
        <div
          className="lg:px-[50px] backdrop-blur-[25px] relative 3xl:px-[100px] sticky z-50 top-0 4xl:px-[150px] 5xl:px-[250px]"
          id="header"
        >
          <div className="max-w-[1420px] border-y relative mx-auto justify-between items-center flex lg:px-5 py-3 pl-4 pr-2.5 md:py-2 md:px-10 lg:py-[15px] lg:border-x border-primary-500/[.07]">
            <div className="size-[284px] absolute opacity-[.45] top-[-106px] left-[-68px] bg-primary-500/20 blur-3xl" />
            <Logo className="w-[104.62px] lg:w-[128px] h-[15.37px] lg:h-[18.8px]" />

            <div className="inline-flex items-center gap-x-2 md:gap-x-3">
              <button
                onClick={() => setIsOpen(true)}
                className="h-[31px] cursor-pointer pl-2 pr-2.5 lg:pr-[11px] inline-flex items-center gap-x-[7px] focus-visible:outline-hidden"
              >
                <Globe className="size-5 text-white" />
                <span className="text-white text-xs leading-none">English</span>
                {isOpen ? (
                  <ChevronUp className="size-4 text-white" />
                ) : (
                  <ChevronDown className="size-4 text-white" />
                )}
              </button>
              <Button
                className="max-lg:h-8 max-lg:px-3 max-lg:text-[11px] max-lg:leading-[19.62px] max-lg:font-medium"
                size="md"
              >
                Sign up
              </Button>
              <Button
                className="ml-3 text-white max-lg:h-8 max-lg:px-2.5 max-lg:text-[11px] max-lg:leading-[19.62px] max-lg:font-medium"
                size="md"
                visual="gray"
                variant="link"
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
        {/* Hero */}
        <div className="lg:px-[50px] 3xl:px-[100px] 4xl:px-[150px] 5xl:px-[250px]">
          <div className="max-w-[1420px] relative lg:border-x lg:border-primary-500/[.07] mx-auto pt-10 pb-[327px] px-7 md:p-10 lg:py-[100px] lg:px-5">
            <Particles className="absolute max-md:inset-x-[21.25px] max-md:w-auto max-md:bottom-0 max-md:h-[289.89px] md:max-lg:w-[665.99px] md:max-lg:h-[475.34px] lg:max-3xl:w-[879.33px] lg:max-3xl:h-[670.8px] 3xl:max-4xl:w-[939.33px] 3xl:max-4xl:h-[670.8px] md:top-[1.92px] md:right-[17.41px] lg:top-[19.87px] lg:right-[-159.24px] 3xl:top-[51px] 4xl:top-[21px] 3xl:right-[-208.33px] 4xl:right-[-198.33px]" />

            <div className="flex relative flex-col gap-y-10 md:gap-y-[50px]">
              <div className="space-y-3 md:space-y-4">
                <div className="max-w-[880px]">
                  <h1 className="text-[42px] md:text-[54px] max-md:text-center lg:text-[68px] 3xl:text-[95px] leading-none font-bold text-white">
                    <span className="block">
                      <span className="bg-linear-to-r text-transparent bg-clip-text from-primary-500 from-[8.2%] to-[95.19%] to-primary-800">
                        Tech
                      </span>{" "}
                      talent
                    </span>
                    on demand
                  </h1>
                </div>
                <div className="max-w-[275px] max-md:mx-auto md:max-w-[375px] lg:max-w-[592px]">
                  <p className="text-base max-md:text-center lg:text-xl leading-none text-white/40">
                    Explore thousands of ready-to-launch projects, customized to
                    your needs, and work with top talent for unparalleled
                    success.
                  </p>
                </div>
              </div>

              <form className="rounded-lg lg:rounded-xl bg-white md:max-w-[390px] lg:max-w-[695px] flex items-center gap-x-[11.12px] lg:gap-x-[13.6px] h-[55px] lg:h-[68px] px-3 lg:pr-3.5 lg:pl-[20.4px]">
                <div className="flex items-center gap-x-[13.9px] lg:gap-x-[17px] flex-auto">
                  <span className="text-gray-500 inline-block flex-none">
                    <Search className="size-7 lg:size-[34px]" />
                  </span>
                  <input
                    className="focus:ring-0 w-full flex-auto border-0 p-0 bg-white text-[22px] leading-[33.35px] lg:text-[27.2px] lg:leading-[40.8px] placeholder:text-gray-500 text-gray-950"
                    type="text"
                    placeholder="Find projects"
                  />
                </div>

                <span className="inline-block shrink-0 h-10 w-px bg-gray-200 max-lg:hidden" />

                <div className="inline-flex items-center gap-x-[11.12px] lg:gap-x-[13.6px]">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <IconButton
                        className="lg:hidden"
                        variant="ghost"
                        visual="gray"
                      >
                        <ChevronDown className="size-[15px]" />
                      </IconButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="max-lg:hidden"
                        size="md"
                        variant="ghost"
                        type="button"
                        visual="gray"
                      >
                        Projects <ChevronDown className="size-[15px]" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={13} className="w-56">
                      <DropdownMenuItem>
                        <Briefcase className="size-4" /> Projects
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <RefreshCw className="size-4" /> Services
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="size-4" /> Teams
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <User className="size-4" /> Talent
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <File className="size-4" /> Jobs
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button size="md">Search</Button>
                </div>
              </form>
            </div>
            <div className="max-md:bottom-[-152px] max-md:left-[82px] md:right-[-14px] lg:right-[-44px] max-3xl:scale-[.66] md:top-[-68px] lg:top-[-64px] 3xl:top-[71px] 4xl:top-[41px] 3xl:right-[24.13px] 4xl:right-[34.13px] absolute">
              <div className="relative rounded-[28px] translate-x-[-169px] border border-primary-500/[.14] p-3">
                <div className="rounded-[20px] flex items-center gap-x-[17.36px] border border-primary-500/25 p-[18.52px] pr-[30.52px]">
                  <Avatar className="size-[100px] shrink-0" size="2xl">
                    <AvatarImage src="/man.jpg" alt="Man" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <div className="relative">
                    <h1 className="text-[12.51px] font-bold text-white leading-none">
                      Dheeraj{" "}
                      <span className="text-[10.72px] font-light text-gray-500">
                        @Tech_Sential
                      </span>
                    </h1>

                    <h2 className="text-[10.72px] text-white mt-[4.79px] font-medium leading-none">
                      Full-Stack Engineer
                    </h2>

                    <p className="text-[9.83px] font-light mt-[7.15px] text-white">
                      12 Full-Stack Engineer
                    </p>

                    <div className="mt-[12.51px] inline-flex items-center gap-x-3">
                      <MarkerPin02 className="size-[10.72px] text-gray-500" />
                      <span className="text-[8.94px] leading-[14.3px] font-medium text-gray-500">
                        <span className="font-medium">India</span> 8:03pm local
                        time
                      </span>
                    </div>

                    <div className="mt-[12.51px] flex items-center gap-x-[7.15px]">
                      <div className="rounded-[2.71px] flex items-center gap-x-[4.47px] px-[5.36px] py-[2.68px] bg-white/[.07]">
                        <div className="flex items-center gap-x-[2.68px]">
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                        </div>
                        <span className="text-[10.72px] text-white leading-none">
                          4.9
                        </span>
                      </div>

                      <span className="text-[10.72px] leading-none text-white">
                        16 projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 rounded-[28px] translate-x-[-60px] translate-y-[-64px] border border-primary-500/[.14] p-3">
                <div className="rounded-[20px] bg-[#0D1D42] flex items-center gap-x-[17.36px] border border-primary-500/25 p-[18.52px] pr-[30.52px]">
                  <Avatar className="size-[100px] shrink-0" size="2xl">
                    <AvatarImage src="/man.jpg" alt="Man" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <div className="relative">
                    <h1 className="text-[12.51px] font-bold text-white leading-none">
                      Dheeraj{" "}
                      <span className="text-[10.72px] font-light text-gray-500">
                        @Tech_Sential
                      </span>
                    </h1>

                    <h2 className="text-[10.72px] text-white mt-[4.79px] font-medium leading-none">
                      Full-Stack Engineer
                    </h2>

                    <p className="text-[9.83px] font-light mt-[7.15px] text-white">
                      12 Full-Stack Engineer
                    </p>

                    <div className="mt-[12.51px] inline-flex items-center gap-x-3">
                      <MarkerPin02 className="size-[10.72px] text-gray-500" />
                      <span className="text-[8.94px] leading-[14.3px] font-medium text-gray-500">
                        <span className="font-medium">India</span> 8:03pm local
                        time
                      </span>
                    </div>

                    <div className="mt-[12.51px] flex items-center gap-x-[7.15px]">
                      <div className="rounded-[2.71px] flex items-center gap-x-[4.47px] px-[5.36px] py-[2.68px] bg-white/[.07]">
                        <div className="flex items-center gap-x-[2.68px]">
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                        </div>
                        <span className="text-[10.72px] text-white leading-none">
                          4.9
                        </span>
                      </div>

                      <span className="text-[10.72px] leading-none text-white">
                        16 projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[28px] translate-x-[14px] translate-y-[-94px] border border-primary-500/[.14] p-3">
                <div className="rounded-[20px] flex items-center gap-x-[17.36px] border border-primary-500/25 p-[18.52px] pr-[30.52px]">
                  <Avatar className="size-[100px] shrink-0" size="2xl">
                    <AvatarImage src="/man.jpg" alt="Man" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <div className="relative">
                    <h1 className="text-[12.51px] font-bold text-white leading-none">
                      Dheeraj{" "}
                      <span className="text-[10.72px] font-light text-gray-500">
                        @Tech_Sential
                      </span>
                    </h1>

                    <h2 className="text-[10.72px] text-white mt-[4.79px] font-medium leading-none">
                      Full-Stack Engineer
                    </h2>

                    <p className="text-[9.83px] font-light mt-[7.15px] text-white">
                      12 Full-Stack Engineer
                    </p>

                    <div className="mt-[12.51px] inline-flex items-center gap-x-3">
                      <MarkerPin02 className="size-[10.72px] text-gray-500" />
                      <span className="text-[8.94px] leading-[14.3px] font-medium text-gray-500">
                        <span className="font-medium">India</span> 8:03pm local
                        time
                      </span>
                    </div>

                    <div className="mt-[12.51px] flex items-center gap-x-[7.15px]">
                      <div className="rounded-[2.71px] flex items-center gap-x-[4.47px] px-[5.36px] py-[2.68px] bg-white/[.07]">
                        <div className="flex items-center gap-x-[2.68px]">
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                          <Star className="size-[10.72px] text-primary-500 fill-primary-500" />
                        </div>
                        <span className="text-[10.72px] text-white leading-none">
                          4.9
                        </span>
                      </div>

                      <span className="text-[10.72px] leading-none text-white">
                        16 projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1420px] border-b md:border-y lg:border border-primary-500/[.07] mx-auto py-10 pl-3.5 md:p-10 lg:py-[50px] lg:px-5">
            <div className="flex items-end justify-between max-md:mr-3.5">
              <h1 className="text-lg lg:text-[28px] leading-none font-medium text-white">
                Browse by category
              </h1>
              <Button
                className="text-white group hover:underline transition duration-300 cursor-pointer relative max-lg:text-xs max-lg:leading-6 max-lg:font-medium"
                variant="link"
                visual="gray"
              >
                View All Categories{" "}
                <ArrowRight className="size-3.5 lg:size-[15px] group-hover:translate-x-1 transition duration-300" />
              </Button>
            </div>

            <div className="relative py-[12.74px] md:pr-[48px] mt-6 isolate">
              <div className="absolute z-10 inset-y-[12.74px] w-[184px] max-lg:hidden left-0 rotate-180 bg-[linear-gradient(90deg,rgba(9,21,47,0)_0%,rgba(5,11,26,.5)_50%,rgba(5,11,27,1)_100%)]" />
              <div className="absolute z-10 inset-y-[12.74px] w-[184px] max-md:hidden right-0 md:right-[48px] bg-[linear-gradient(90deg,rgba(9,21,47,0)_0%,rgba(5,11,26,.5)_50%,rgba(5,11,27,1)_100%)]" />
              <SwiperRoot>
                <SwiperContent
                  slidesPerView={2}
                  spaceBetween={9.81}
                  breakpoints={{
                    1920: {
                      slidesPerView: 7,
                    },
                    1440: {
                      slidesPerView: 6,
                    },
                    1024: {
                      spaceBetween: 12,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  <SwiperSlide>
                    <article className="rounded-lg bg-[#0A1430] hover:border-primary-500 cursor-pointer transition duration-300 border border-primary-500/[.07] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] p-3">
                      <div className="h-[132px] w-full relative overflow-hidden rounded-md">
                        <Image
                          className="object-cover"
                          src="/artificial-intelligence.jpeg"
                          alt="Artificial Intelligence"
                          fill
                        />
                      </div>

                      <div className="mt-3">
                        <h1 className="text-xs font-bold leading-none text-white text-center">
                          Machine Learning
                        </h1>
                      </div>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="rounded-lg bg-[#0A1430] hover:border-primary-500 cursor-pointer transition duration-300 border border-primary-500/[.07] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] p-3">
                      <div className="h-[132px] w-full relative overflow-hidden rounded-md">
                        <Image
                          className="object-cover"
                          src="/artificial-intelligence.jpeg"
                          alt="Artificial Intelligence"
                          fill
                        />
                      </div>

                      <div className="mt-3">
                        <h1 className="text-xs font-bold leading-none text-white text-center">
                          Machine Learning
                        </h1>
                      </div>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="rounded-lg bg-[#0A1430] hover:border-primary-500 cursor-pointer transition duration-300 border border-primary-500/[.07] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] p-3">
                      <div className="h-[132px] w-full relative overflow-hidden rounded-md">
                        <Image
                          className="object-cover"
                          src="/artificial-intelligence.jpeg"
                          alt="Artificial Intelligence"
                          fill
                        />
                      </div>

                      <div className="mt-3">
                        <h1 className="text-xs font-bold leading-none text-white text-center">
                          Machine Learning
                        </h1>
                      </div>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="rounded-lg bg-[#0A1430] hover:border-primary-500 cursor-pointer transition duration-300 border border-primary-500/[.07] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] p-3">
                      <div className="h-[132px] w-full relative overflow-hidden rounded-md">
                        <Image
                          className="object-cover"
                          src="/artificial-intelligence.jpeg"
                          alt="Artificial Intelligence"
                          fill
                        />
                      </div>

                      <div className="mt-3">
                        <h1 className="text-xs font-bold leading-none text-white text-center">
                          Machine Learning
                        </h1>
                      </div>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="rounded-lg bg-[#0A1430] hover:border-primary-500 cursor-pointer transition duration-300 border border-primary-500/[.07] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] p-3">
                      <div className="h-[132px] w-full relative overflow-hidden rounded-md">
                        <Image
                          className="object-cover"
                          src="/artificial-intelligence.jpeg"
                          alt="Artificial Intelligence"
                          fill
                        />
                      </div>

                      <div className="mt-3">
                        <h1 className="text-xs font-bold leading-none text-white text-center">
                          Machine Learning
                        </h1>
                      </div>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="rounded-lg bg-[#0A1430] hover:border-primary-500 cursor-pointer transition duration-300 border border-primary-500/[.07] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] p-3">
                      <div className="h-[132px] w-full relative overflow-hidden rounded-md">
                        <Image
                          className="object-cover"
                          src="/artificial-intelligence.jpeg"
                          alt="Artificial Intelligence"
                          fill
                        />
                      </div>

                      <div className="mt-3">
                        <h1 className="text-xs font-bold leading-none text-white text-center">
                          Machine Learning
                        </h1>
                      </div>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="rounded-lg bg-[#0A1430] hover:border-primary-500 cursor-pointer transition duration-300 border border-primary-500/[.07] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] p-3">
                      <div className="h-[132px] w-full relative overflow-hidden rounded-md">
                        <Image
                          className="object-cover"
                          src="/artificial-intelligence.jpeg"
                          alt="Artificial Intelligence"
                          fill
                        />
                      </div>

                      <div className="mt-3">
                        <h1 className="text-xs font-bold leading-none text-white text-center">
                          Machine Learning
                        </h1>
                      </div>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="rounded-lg bg-[#0A1430] hover:border-primary-500 cursor-pointer transition duration-300 border border-primary-500/[.07] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] p-3">
                      <div className="h-[132px] w-full relative overflow-hidden rounded-md">
                        <Image
                          className="object-cover"
                          src="/artificial-intelligence.jpeg"
                          alt="Artificial Intelligence"
                          fill
                        />
                      </div>

                      <div className="mt-3">
                        <h1 className="text-xs font-bold leading-none text-white text-center">
                          Machine Learning
                        </h1>
                      </div>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="rounded-lg bg-[#0A1430] hover:border-primary-500 cursor-pointer transition duration-300 border border-primary-500/[.07] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] p-3">
                      <div className="h-[132px] w-full relative overflow-hidden rounded-md">
                        <Image
                          className="object-cover"
                          src="/artificial-intelligence.jpeg"
                          alt="Artificial Intelligence"
                          fill
                        />
                      </div>

                      <div className="mt-3">
                        <h1 className="text-xs font-bold leading-none text-white text-center">
                          Machine Learning
                        </h1>
                      </div>
                    </article>
                  </SwiperSlide>
                </SwiperContent>

                <div className="absolute inset-y-[13.24px] max-md:hidden right-0">
                  <SwiperNextTrigger className="border cursor-pointer bg-[#0A1430] shrink-0 h-full flex items-center justify-center border-primary-500/[.07] rounded-md w-9 shadow-[0px_1.51px_3.02px_0px_rgba(16,24,40,.05)]">
                    <ChevronRight className="size-4 text-white" />
                  </SwiperNextTrigger>
                </div>
              </SwiperRoot>
            </div>
          </div>

          <div className="max-w-[1420px] mx-auto lg:border-x border-b border-primary-500/[.07] py-10 px-3.5 md:p-10 lg:px-5 lg:py-[50px]">
            <div className="lg:max-w-[284px] mx-auto max-md:px-[41px]">
              <span className="block text-xs text-center leading-tight text-white">
                Built for modern teams, from fast-moving startups to large-scale
                organizations.
              </span>
            </div>

            <div className="mt-[30px] lg:mt-[50px] flex items-center justify-around">
              <div className="flex relative items-center justify-around overflow-x-auto scrollbar-none gap-x-[32.11px] md:gap-x-10 3xl:gap-x-[66px]">
                <div className="absolute right-0 inset-y-0 w-[200px] bg-[linear-gradient(240deg,rgba(6,12,25,1)_0%,rgba(6,12,25,0)_100%)]" />
                <div className="absolute left-0 inset-y-0 w-[200px] bg-[linear-gradient(240deg,rgba(5,11,25,0)_0%,rgba(5,11,25,1)_100%)]" />
                <Image
                  className="object-contain shrink-0 h-[40.85px] w-[149.58px] md:h-[50px] md:w-[183px]"
                  src="/fantaslife.png"
                  alt="Fantas Life"
                  height={50}
                  width={183}
                />
                <Image
                  className="object-contain w-[67.84px] h-[41.02px] shrink-0 md:h-[83px] md:w-[83px]"
                  src="/friday-01.png"
                  alt="Fantas Life"
                  height={83}
                  width={83}
                />
                <Image
                  className="object-contain w-[96.45px] h-[40.92px] shrink-0 md:h-[83px] md:w-[83px]"
                  src="/milkroad.png"
                  alt="Milk Road"
                  height={83}
                  width={83}
                />
                <Image
                  className="object-contain w-[56.4px] h-[41.02px] shrink-0 md:h-[69px] md:w-[50px]"
                  src="/overtime.png"
                  alt="Over time"
                  height={69}
                  width={50}
                />
                <Image
                  className="object-contain w-[65.39px] h-[40.63px] shrink-0 md:h-[69px] md:w-[50px]"
                  src="/rap-tv-01.png"
                  alt="Rap TV"
                  height={69}
                  width={50}
                />
                <Image
                  className="object-contain w-[131.6px] h-[40.88px] shrink-0 md:w-[161px] md:h-[50px]"
                  src="/awa.png"
                  alt="AWA"
                  height={50}
                  width={161}
                />
                <Image
                  className="object-contain w-[97.27px] h-[40.83px] shrink-0 md:w-[161px] md:h-[50px]"
                  src="/pumpclub.png"
                  alt="Pump club"
                  height={50}
                  width={119}
                />
              </div>
            </div>

            <div className="mt-10 md:mt-[60px] lg:mt-[120px] max-w-[963.32px] max-lg:px-3.5 mx-auto flex flex-col md:flex-row items-center gap-[40px] lg:gap-x-[97px]">
              <div className="max-w-fit md:max-lg:px-[27.51px]">
                <Image
                  className="object-contain max-lg:hidden mx-auto w-[161px] h-[50px]"
                  src="/awa.png"
                  alt="/AWA"
                  width={161}
                  height={50}
                />
                <div className="h-[34.64px] md:h-[42.38px] lg:mt-[26px] rounded-[4.09px] md:rounded-[5px] bg-white/[.07] px-[10px] md:px-[13px] inline-flex gap-x-[16.35px] md:gap-x-5 items-center">
                  <div className="gap-x-[4.77px] md:gap-x-[5.83px] items-center inline-flex">
                    <Star className="shrink-0 size-[19.071px] md:size-[23.33px] text-primary-500 fill-primary-500" />
                    <Star className="shrink-0 size-[19.071px] md:size-[23.33px] text-primary-500 fill-primary-500" />
                    <Star className="shrink-0 size-[19.071px] md:size-[23.33px] text-primary-500 fill-primary-500" />
                    <Star className="shrink-0 size-[19.071px] md:size-[23.33px] text-primary-500 fill-primary-500" />
                    <Star className="shrink-0 size-[19.071px] md:size-[23.33px] text-primary-500 fill-primary-500" />
                  </div>
                  <span className="text-xs md:text-sm leading-none text-white">
                    4.9
                  </span>
                </div>

                <span className="text-[12px] text-center block text-white mt-2 leading-none">
                  See more{" "}
                  <Link
                    className="focus-visible:outline-hidden underline"
                    href="#"
                  >
                    G2 Reviews
                  </Link>
                </span>
              </div>

              <div className="relative max-lg:px-[14px]">
                <span className="block text-[13px] md:text-base font-bold text-white leading-none">
                  “A quote from director or point of contact about what went
                  well with using our services and what is the positive impact
                  on the company.”
                </span>

                <div className="mt-3 md:mt-6 inline-flex items-center gap-x-[12px]">
                  <Avatar className="size-[61.30px] md:size-[75px]">
                    <AvatarImage src="/man.jpg" alt="Man" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>

                  <div className="space-y-0.5">
                    <h1 className="text-xs md:text-sm leading-none text-white font-bold">
                      Jane Doe
                    </h1>
                    <p className="text-xs md:text-sm leading-none text-white/40">
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1420px] lg:border-x lg:border-primary-500/[.07] mx-auto py-10 px-3.5 md:p-10 lg:pb-[100px] lg:px-5 lg:pt-[50px]">
            <div className="lg:p-[50px] relative lg:pb-[75px] py-7 px-3.5 md:px-10 md:py-5 lg:py-[50px] lg:px-6 rounded-lg bg-primary-500/5 border border-primary-500/[.07] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
              <div className="size-[74.074px] absolute opacity-[.45] top-[19.73px] right-[19.73px] bg-primary-500/13 blur-3xl" />
              <h1 className="text-2xl lg:text-[38px] leading-none font-medium text-white">
                Work with Marketeq your way
              </h1>

              <div className="mt-10 lg:mt-[50px]">
                <Tabs defaultValue="find-a-project">
                  <TabsList className="md:max-3xl:grid max-3xl:grid-cols-4 max-3xl:gap-x-0 3xl:justify-between w-full border-primary-500/[.07]">
                    <TabsTrigger
                      className="max-lg:text-xs cursor-pointer max-lg:px-4 max-lg:pb-4 px-5 pb-5"
                      containerClassName="justify-center shrink-0"
                      value="find-a-project"
                    >
                      <SearchIcon className="size-7 lg:size-[34px]" />
                      Find A Project
                    </TabsTrigger>
                    <TabsTrigger
                      className="max-lg:text-xs cursor-pointer max-lg:px-4 max-lg:pb-4 px-5 pb-5"
                      containerClassName="justify-center shrink-0"
                      value="hire-a-team"
                    >
                      <Users03 className="size-7 lg:size-[34px]" />
                      Hire A Team
                    </TabsTrigger>
                    <TabsTrigger
                      className="max-lg:text-xs cursor-pointer max-lg:px-4 max-lg:pb-4 px-5 pb-5"
                      containerClassName="justify-center shrink-0"
                      value="find-talent"
                    >
                      <UserCircle className="size-7 lg:size-[34px]" />
                      Find Talent
                    </TabsTrigger>
                    <TabsTrigger
                      className="max-lg:text-xs cursor-pointer max-lg:px-4 max-lg:pb-4 px-5 pb-5 shrink-0"
                      containerClassName="justify-center"
                      value="post-a-job"
                    >
                      <Briefcase className="size-7 lg:size-[34px]" />
                      Post a Job
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="find-a-project">
                    <div className="mt-10 lg:mt-[50px] 3xl:pt-[75px] relative">
                      <div className="size-[399px] absolute opacity-[.45] top-[37.5px] left-[232px] bg-primary-500/20 blur-3xl" />
                      <div className="relative grid md:grid-cols-3 gap-y-10 md:gap-x-[57px] lg:gap-x-[89px] pl-[50px] lg:px-[50px]">
                        <article className="relative">
                          <div className="absolute text-[100px] lg:text-[120.23px] leading-none text-primary-500/[.07] -bottom-2 md:bottom-[-26px] translate-x-[-80%] font-bold">
                            1
                          </div>
                          <div className="bg-primary-500/[.07] size-[51.06px] lg:size-[62.47px] rounded-full inline-flex items-center justify-center border border-primary-500/12.5">
                            <Search className="size-[18.87px] lg:size-[24px] text-white" />
                          </div>

                          <div className="mt-4 lg:mt-5 space-y-2.5 lg:space-y-3">
                            <h1 className="font-bold text-sm lg:text-lg text-white">
                              Browse Projects
                            </h1>
                            <p className="text-[13px] lg:text-base leading-tight text-white/40">
                              Use advanced filters to search through a vast
                              library of bespoke tech, marketing, and business
                              projects tailored to your specific needs.
                            </p>
                          </div>
                        </article>
                        <article className="relative">
                          <div className="absolute text-[100px] lg:text-[120.23px] leading-none text-primary-500/[.07] -bottom-2 md:bottom-[-26px] translate-x-[-80%] font-bold">
                            2
                          </div>
                          <div className="bg-primary-500/[.07] size-[51.06px] lg:size-[62.47px] rounded-full inline-flex items-center justify-center border border-primary-500/12.5">
                            <Tool02 className="size-[18.87px] lg:size-[24px] text-white" />
                          </div>

                          <div className="mt-4 lg:mt-5 space-y-2.5 lg:space-y-3">
                            <h1 className="font-bold text-sm lg:text-lg text-white">
                              Customize Your Project
                            </h1>
                            <p className="text-[13px] lg:text-base leading-tight text-white/40">
                              Modify and adapt your project or service scope to
                              perfectly fit your unique requirements before
                              launching your dedicated team.
                            </p>
                          </div>
                        </article>
                        <article className="relative">
                          <div className="absolute text-[100px] lg:text-[120.23px] leading-none text-primary-500/[.07] -bottom-2 md:bottom-[-26px] translate-x-[-80%] font-bold">
                            3
                          </div>
                          <div className="bg-primary-500/[.07] size-[51.06px] lg:size-[62.47px] rounded-full inline-flex items-center justify-center border border-primary-500/12.5">
                            <Rocket className="size-[18.87px] lg:size-[24px] text-white" />
                          </div>

                          <div className="mt-4 lg:mt-5 space-y-2.5 lg:space-y-3">
                            <h1 className="font-bold text-sm lg:text-lg text-white">
                              Launch Your Team
                            </h1>
                            <p className="text-[13px] lg:text-base leading-tight text-white/40">
                              Select from pre-assembled teams or build your own
                              from our top-tier talent pool for seamless project
                              and service execution.
                            </p>
                          </div>
                        </article>
                      </div>

                      <div className="mt-10 lg:mt-[75px] relative flex items-center gap-x-6 justify-center">
                        <Button
                          className="border-white cursor-pointer max-lg:h-9 max-lg:px-4 max-lg:text-[13px] max-lg:gap-x-1.5 max-lg:leading-[19.62px] text-white hover:bg-primary-500 hover:text-white hover:border-primary-500 rounded-full"
                          variant="outlined"
                          visual="gray"
                          size="xl"
                        >
                          Start a Project
                        </Button>
                        <Button
                          className="rounded-full cursor-pointer max-lg:h-9 max-lg:px-4 max-lg:text-[13px] max-lg:gap-x-1.5 max-lg:leading-[19.62px] bg-white text-dark-blue-400 hover:bg-primary-500 hover:text-white"
                          size="xl"
                        >
                          Browse Projects{" "}
                          <ArrowRight className="size-[14.71px] lg:size-[18px]" />{" "}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="Projects"></TabsContent>
                  <TabsContent value="Folders"></TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-t-[6.54px] lg:rounded-t-[50px] lg:px-[50px] 3xl:px-[100px] 4xl:px-[150px] 5xl:px-[250px] relative border-t border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] bg-[linear-gradient(180deg,rgba(48,108,254,0.12)_0%,rgba(38,85,201,0.12)_51.44%,rgba(28,64,152,0)100%)]">
          <div className="size-[74.074px] absolute opacity-[.33] top-0 right-0 bg-primary-500/13 blur-3xl" />

          <div className="max-w-[1420px] border-x border-b border-primary-500/[.07] mx-auto pt-7 pb-10 pl-3.5 md:pl-10 lg:p-[50px] 3xl:pb-[50px] 3xl:pt-[75px]">
            <h1 className="text-[24px] lg:text-[38px] leading-none text-white font-medium">
              Popular Now
            </h1>

            <Tabs className="mt-[30px] lg:mt-[50px]" defaultValue="Projects">
              <SwiperRoot className="popular-now-carousel">
                <TabsPrimitive.List className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-x-[9.81px] lg:gap-x-3">
                    <TabsPrimitive.Trigger
                      className="h-[28.44px] cursor-pointer lg:h-[34px] border-2 border-white/40 text-white/40 hover:text-white hover:border-white data-[state=active]:text-white data-[state=active]:border-white rounded-full focus-visible:outline-hidden px-[11.44px] lg:px-3.5 text-xs lg:text-sm font-medium"
                      value="Projects"
                    >
                      Projects
                    </TabsPrimitive.Trigger>
                    <TabsPrimitive.Trigger
                      className="h-[28.44px] cursor-pointer lg:h-[34px] border-2 border-white/40 text-white/40 hover:text-white hover:border-white data-[state=active]:text-white data-[state=active]:border-white rounded-full focus-visible:outline-hidden px-[11.44px] lg:px-3.5 text-xs lg:text-sm font-medium"
                      value="Folders"
                    >
                      Folders
                    </TabsPrimitive.Trigger>
                  </div>

                  <div className="inline-flex max-lg:hidden items-center gap-x-3">
                    <SwiperPrevTrigger className="size-8 data-[state=active]:cursor-pointer border border-white/20 rounded-full data-[state=active]:border-white data-[state=active]:text-white text-white/20 focus-visible:outline-hidden inline-flex items-center justify-center shrink-0">
                      <ChevronLeft className="size-4" />
                    </SwiperPrevTrigger>
                    <SwiperNextTrigger className="size-8 data-[state=active]:cursor-pointer border border-white/20 rounded-full data-[state=active]:border-white data-[state=active]:text-white text-white/20 focus-visible:outline-hidden inline-flex items-center justify-center shrink-0">
                      <ChevronRight className="size-4" />
                    </SwiperNextTrigger>
                  </div>
                </TabsPrimitive.List>

                <TabsContent value="Projects">
                  <div className="pt-[19.62px] lg:pt-6 relative isolate">
                    <div className="absolute lg:block hidden z-10 bottom-0 top-[19.62px] lg:top-6 w-[111px] right-0 bg-[linear-gradient(90deg,rgba(9,21,47,0)_0%,rgba(9,21,47,0.5)_50%,rgba(8,19,44,1)_100%)]" />

                    <SwiperContent
                      spaceBetween={12}
                      slidesPerView="auto"
                      breakpoints={{
                        1024: {
                          spaceBetween: 20,
                        },
                      }}
                    >
                      {fromLength(6).map((item) => (
                        <SwiperSlide key={item}>
                          <article className="p-[16.35px] lg:p-5 bg-primary-500/5 rounded-lg border border-primary-500/[.07] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                            <div className="relative h-[138.24px] rounded-md lg:h-[169.126px] overflow-hidden">
                              <Image
                                className="object-cover transition-transform [transition-duration:3000ms] hover:scale-150 hover:rotate-3"
                                src="/artificial-intelligence.jpeg"
                                alt="Artificial intelligence"
                                fill
                              />
                            </div>
                            <div className="mt-[9.81px] lg:mt-3">
                              <div className="flex items-start justify-between gap-x-[9.81px] lg:gap-x-3">
                                <h1 className="text-base font-bold leading-none text-white">
                                  The Ultimate Mobile App Experience
                                </h1>

                                <div className="inline-flex items-center gap-x-[3.27px] lg:gap-x-1">
                                  <Star className="size-[12.26px] lg:size-[15px] text-primary-500 fill-primary-500" />
                                  <span className="text-xs lg:text-sm leading-none whitespace-nowrap font-medium text-white">
                                    4.9 <span className="font-light">(5)</span>
                                  </span>
                                </div>
                              </div>

                              <p className="text-xs lg:text-sm leading-none mt-[9.81px] lg:mt-3 font-light text-white/40">
                                Brief Description of the project. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt.
                              </p>

                              <div className="space-y-[9.81px] lg:space-y-3 mt-[11.44px] lg:mt-3.5">
                                <div className="gap-x-[5.23px] lg:gap-x-3.5 flex items-center">
                                  <Clock className="size-[14.71px] lg:size-[18px] text-primary-500" />
                                  <span className="text-xs lg:text-sm font-medium leading-none text-white">
                                    Starting from 12 weeks
                                  </span>
                                </div>
                                <div className="gap-x-[5.23px] lg:gap-x-3.5 flex items-center">
                                  <Money className="size-[14.71px] lg:size-[18px]" />
                                  <span className="text-xs lg:text-sm font-medium leading-none text-white">
                                    $50,000 budget
                                  </span>
                                </div>
                              </div>

                              <div className="flex mt-[16.35px] lg:mt-5 items-center justify-between">
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <AvatarGroup max={2} size="sm">
                                        <Avatar
                                          size="sm"
                                          className="border-[3px] border-black hover:ring-0 active:ring-0"
                                        >
                                          <AvatarImage
                                            src="/woman.jpg"
                                            alt="Woman"
                                          />
                                          <AvatarFallback>W</AvatarFallback>
                                        </Avatar>
                                        <Avatar
                                          size="sm"
                                          className="border-[3px] border-black hover:ring-0 active:ring-0"
                                        >
                                          <AvatarImage
                                            src="/woman.jpg"
                                            alt="Woman"
                                          />
                                          <AvatarFallback>W</AvatarFallback>
                                        </Avatar>
                                        <Avatar
                                          size="sm"
                                          className="border-[3px] border-black hover:ring-0 active:ring-0"
                                        >
                                          <AvatarImage
                                            src="/woman.jpg"
                                            alt="Woman"
                                          />
                                          <AvatarFallback>W</AvatarFallback>
                                        </Avatar>
                                        <Avatar
                                          size="sm"
                                          className="border-[3px] border-black hover:ring-0 active:ring-0"
                                        >
                                          <AvatarImage
                                            src="/woman.jpg"
                                            alt="Woman"
                                          />
                                          <AvatarFallback>W</AvatarFallback>
                                        </Avatar>
                                        <Avatar
                                          size="sm"
                                          className="border-[3px] border-black hover:ring-0 active:ring-0"
                                        >
                                          <AvatarImage
                                            src="/woman.jpg"
                                            alt="Woman"
                                          />
                                          <AvatarFallback>W</AvatarFallback>
                                        </Avatar>
                                        <Avatar
                                          size="sm"
                                          className="border-[3px] border-black hover:ring-0 active:ring-0"
                                        >
                                          <AvatarImage
                                            src="/woman.jpg"
                                            alt="Woman"
                                          />
                                          <AvatarFallback>W</AvatarFallback>
                                        </Avatar>
                                      </AvatarGroup>
                                    </TooltipTrigger>
                                    <TooltipContent className="p-0" size="md">
                                      <ScrollArea
                                        className="h-[192px] p-3 pr-4"
                                        scrollBar={
                                          <ScrollBar
                                            className="w-4 p-1"
                                            thumbClassName="bg-white/20"
                                          />
                                        }
                                      >
                                        <div className="space-y-3 pr-5">
                                          <div className="flex items-center gap-x-2">
                                            <Avatar className="hover:ring-0 active:ring-0">
                                              <AvatarImage
                                                src="/woman.jpg"
                                                alt="Woman"
                                              />
                                              <AvatarFallback>W</AvatarFallback>
                                            </Avatar>
                                            <span className="text-xs font-medium leading-5">
                                              Woman
                                            </span>
                                          </div>
                                          <div className="flex items-center gap-x-2">
                                            <Avatar className="hover:ring-0 active:ring-0">
                                              <AvatarImage
                                                src="/woman.jpg"
                                                alt="Woman"
                                              />
                                              <AvatarFallback>W</AvatarFallback>
                                            </Avatar>
                                            <span className="text-xs font-medium leading-5">
                                              Woman
                                            </span>
                                          </div>
                                          <div className="flex items-center gap-x-2">
                                            <Avatar className="hover:ring-0 active:ring-0">
                                              <AvatarImage
                                                src="/woman.jpg"
                                                alt="Woman"
                                              />
                                              <AvatarFallback>W</AvatarFallback>
                                            </Avatar>
                                            <span className="text-xs font-medium leading-5">
                                              Woman
                                            </span>
                                          </div>
                                          <div className="flex items-center gap-x-2">
                                            <Avatar className="hover:ring-0 active:ring-0">
                                              <AvatarImage
                                                src="/woman.jpg"
                                                alt="Woman"
                                              />
                                              <AvatarFallback>W</AvatarFallback>
                                            </Avatar>
                                            <span className="text-xs font-medium leading-5">
                                              Woman
                                            </span>
                                          </div>
                                          <div className="flex items-center gap-x-2">
                                            <Avatar className="hover:ring-0 active:ring-0">
                                              <AvatarImage
                                                src="/woman.jpg"
                                                alt="Woman"
                                              />
                                              <AvatarFallback>W</AvatarFallback>
                                            </Avatar>
                                            <span className="text-xs font-medium leading-5">
                                              Woman
                                            </span>
                                          </div>
                                          <div className="flex items-center gap-x-2">
                                            <Avatar className="hover:ring-0 active:ring-0">
                                              <AvatarImage
                                                src="/woman.jpg"
                                                alt="Woman"
                                              />
                                              <AvatarFallback>W</AvatarFallback>
                                            </Avatar>
                                            <span className="text-xs font-medium leading-5">
                                              Woman
                                            </span>
                                          </div>
                                        </div>
                                      </ScrollArea>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>

                                <Favorite className="fill-transparent cursor-pointer text-gray-500" />
                              </div>
                            </div>
                          </article>
                        </SwiperSlide>
                      ))}
                    </SwiperContent>
                  </div>
                </TabsContent>
              </SwiperRoot>
            </Tabs>
          </div>
        </div>

        <div className="lg:pb-[100px] lg:px-[50px] 3xl:px-[100px] 4xl:px-[150px] 5xl:px-[250px]">
          <div className="max-w-[1420px] mx-auto lg:border-x max-lg:pt-10 max-md:px-3.5 md:max-lg:px-10 lg:border-primary-500/[.07]">
            <div className="lg:px-5 lg:pt-[50px]">
              <div className="p-3.5 lg:p-[50px] rounded-md overflow-hidden relative">
                <Image
                  className="object-cover"
                  src="/confident-woman.jpg"
                  alt="Confident woman"
                  fill
                />
                <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0)_26.73%,rgba(0,0,0,.51)_49.94%,rgba(0,0,0,0)_59.28%,rgba(0,0,0,0)_100%)] absolute inset-0" />
                <div className="relative">
                  <button className="px-2 py-1.5 lg:py-2 lg:px-3 bg-success-500 rounded-[4px] lg:rounded-[5px] focus-visible:outline-hidden flex items-center gap-x-[9.81px] lg:gap-x-2.5 text-xs lg:text-lg leading-none font-medium text-white">
                    <Briefcase className="size-[14px] lg:size-[21px]" /> For
                    Clients
                  </button>

                  <div className="mt-[185px] lg:mt-[250px]">
                    <h1 className="text-[28px] lg:text-[38px] leading-none font-medium text-white">
                      Get Started with Projects on Demand
                    </h1>

                    <p className="mt-2 text-lg lg:mt-3 lg:text-[30px] leading-none text-white/70">
                      Launch ready-to-go projects with built-in teams or
                      customize your own from a global network of premium
                      talent.
                    </p>
                  </div>

                  <div className="mt-[30px] lg:mt-[50px] max-w-[865px] grid grid-cols-2 md:grid-cols-4 gap-3.5 lg:gap-x-5">
                    <div className="lg:pt-[28px] lg:pb-[20px] flex flex-col items-center p-5 lg:px-8 gap-y-4 lg:gap-y-5 rounded-lg bg-gray-900/26 blur-[13.98]">
                      <div className="p-[11.44px] lg:p-3.5 inline-flex items-center bg-white/5 rounded-full">
                        <File02 className="size-[27.79px] lg:size-[34px] text-white" />
                      </div>
                      <Link
                        href="#"
                        className="flex items-center gap-x-[3.27px] lg:gap-x-1 group focus-visible:outline-none"
                      >
                        <span className="text-xs lg:text-sm font-bold leading-none text-white group-hover:underline transition duration-300">
                          Find A Project
                        </span>
                        <ArrowRight className="size-[13.8px] lg:size-[17px] text-white group-hover:translate-x-1 transition duration-300" />
                      </Link>
                    </div>
                    <div className="lg:pt-[28px] lg:pb-[20px] flex flex-col items-center p-5 lg:px-8 gap-y-4 lg:gap-y-5 rounded-lg bg-gray-900/26 blur-[13.98]">
                      <div className="p-[11.44px] lg:p-3.5 inline-flex items-center bg-white/5 rounded-full">
                        <Users03 className="size-[27.79px] lg:size-[34px] text-white" />
                      </div>
                      <Link
                        href="#"
                        className="flex items-center gap-x-[3.27px] lg:gap-x-1 group focus-visible:outline-none"
                      >
                        <span className="text-xs lg:text-sm font-bold leading-none text-white group-hover:underline transition duration-300">
                          Hire a Team
                        </span>
                        <ArrowRight className="size-[13.8px] lg:size-[17px] text-white group-hover:translate-x-1 transition duration-300" />
                      </Link>
                    </div>
                    <div className="lg:pt-[28px] lg:pb-[20px] flex flex-col items-center p-5 lg:px-8 gap-y-4 lg:gap-y-5 rounded-lg bg-gray-900/26 blur-[13.98]">
                      <div className="p-[11.44px] lg:p-3.5 inline-flex items-center bg-white/5 rounded-full">
                        <SearchRefraction className="size-[27.79px] lg:size-[34px] text-white" />
                      </div>
                      <Link
                        href="#"
                        className="flex items-center gap-x-[3.27px] lg:gap-x-1 group focus-visible:outline-none"
                      >
                        <span className="text-xs lg:text-sm font-bold leading-none text-white group-hover:underline transition duration-300">
                          Find Talent
                        </span>
                        <ArrowRight className="size-[13.8px] lg:size-[17px] text-white group-hover:translate-x-1 transition duration-300" />
                      </Link>
                    </div>
                    <div className="lg:pt-[28px] lg:pb-[20px] flex flex-col items-center p-5 lg:px-8 gap-y-4 lg:gap-y-5 rounded-lg bg-gray-900/26 blur-[13.98]">
                      <div className="p-[11.44px] lg:p-3.5 inline-flex items-center bg-white/5 rounded-full">
                        <CubeOutline className="size-[27.79px] lg:size-[34px] text-white" />
                      </div>
                      <Link
                        href="#"
                        className="flex items-center gap-x-[3.27px] lg:gap-x-1 group focus-visible:outline-none"
                      >
                        <span className="text-xs lg:text-sm font-bold leading-none text-white group-hover:underline transition duration-300">
                          Build A Project
                        </span>
                        <ArrowRight className="size-[13.8px] lg:size-[17px] text-white group-hover:translate-x-1 transition duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 lg:mt-6 grid md:grid-cols-2 gap-x-5 lg:gap-x-6 lg:px-5 relative">
              <article className="py-5 px-3.5 lg:p-[50px] relative rounded-lg bg-primary-500/[.07] border border-primary-500/25">
                <div className="size-[355px] absolute opacity-[.45] bottom-[-61.26px] left-0 bg-primary-500/20 blur-3xl" />
                <div className="size-[74.074px] absolute opacity-[.45] top-0 right-0 bg-primary-500/20 blur-3xl" />

                <div className="max-w-[483.56px]">
                  <div className="relative w-[101.35px] h-[61.28px] lg:h-[75px] lg:w-[124px]">
                    <Image
                      className="object-contain"
                      src="/friday.png"
                      alt="Friday"
                      fill
                    />
                  </div>

                  <div className="mt-7 lg:mt-[34px] inline-flex items-center gap-x-[19.62px] lg:gap-x-6">
                    <Avatar
                      className="size-[81.74px] lg:size-[100px] border border-white"
                      size="2xl"
                    >
                      <AvatarImage src="/man.jpg" alt="Man" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>

                    <div className="lg:py-2 space-y-0.5 lg:space-y-1">
                      <h1 className="text-xs lg:text-sm leading-none font-bold text-white">
                        James Garcia
                      </h1>
                      <p className="text-xs lg:text-sm leading-none text-white/40">
                        VP of Engineering at NovaForge
                      </p>
                    </div>
                  </div>

                  <p className="text-[13px] lg:text-base mt-[17px] lg:mt-[21px] font-bold leading-tight text-white">
                    “Marketeq made it incredibly easy to find a project that
                    matched our roadmap and a team that delivered fast... we
                    went from idea to MVP in under three weeks.”
                  </p>
                </div>
              </article>
              <article className="py-5 max-md:hidden px-3.5 lg:p-[50px] relative rounded-lg bg-primary-500/[.07] border border-primary-500/25">
                <div className="size-[74.074px] absolute opacity-[.45] top-0 right-0 bg-primary-500/20 blur-3xl" />
                <div className="relative w-[101.35px] h-[61.28px] lg:h-[75px] lg:w-[124px]">
                  <Image
                    className="object-contain"
                    src="/rap-tv.png"
                    alt="Rap TV"
                    fill
                  />
                </div>

                <div className="mt-[58.2px] lg:mt-[34px]">
                  <div className="inline-flex items-center gap-x-5 lg:gap-x-8">
                    <div className="bg-white/[.07] rounded-[4.09px] lg:rounded-[5px] inline-flex items-center gap-x-[16.35px] lg:gap-x-5 px-2.5 py-1.5 lg:px-[13px] lg:py-2">
                      <div className="gap-x-[4.77px] lg:gap-x-[5.83px] inline-flex items-center">
                        <Star className="size-[23.33px] fill-primary-500 text-primary-500 border-primary-500" />
                        <Star className="size-[23.33px] fill-primary-500 text-primary-500 border-primary-500" />
                        <Star className="size-[23.33px] fill-primary-500 text-primary-500 border-primary-500" />
                        <Star className="size-[23.33px] fill-primary-500 text-primary-500 border-primary-500" />
                        <Star className="size-[23.33px] fill-primary-500 text-primary-500 border-primary-500" />
                      </div>

                      <span className="text-xs lg:text-sm leading-none text-white">
                        4.9
                      </span>
                    </div>

                    <span className="text-[10px] lg:text-xs leading-none text-white">
                      See more <span className="underline">G2 Reviews</span>
                    </span>
                  </div>

                  <div className="mt-[58.02px] lg:mt-[57.78px] justify-between max-lg:gap-x-[14px] flex items-center">
                    <div className="max-w-[122.208px] space-y-1 lg:space-y-2">
                      <h1 className="leading-none font-bold text-xl lg:text-[24px] text-white">
                        20%
                      </h1>
                      <p className="text-[10px] lg:text-xs leading-none text-white">
                        Increase statistics
                      </p>
                    </div>
                    <div className="max-w-[122.208px] space-y-1 lg:space-y-2">
                      <h1 className="leading-none font-bold text-xl lg:text-[24px] text-white">
                        98%
                      </h1>
                      <p className="text-[10px] lg:text-xs leading-none text-white">
                        Increased statistics
                      </p>
                    </div>
                    <div className="max-w-[122.208px] space-y-1 lg:space-y-2">
                      <h1 className="leading-none font-bold text-xl lg:text-[24px] text-white">
                        5,000
                      </h1>
                      <p className="text-[10px] lg:text-xs leading-none text-white">
                        Increased statistics
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="mt-5 lg:mt-6 lg:px-5">
              <div className="p-3.5 md:p-5 lg:p-[50px] rounded-md overflow-hidden relative">
                <Image
                  className="object-cover"
                  src="/guy-working.jpg"
                  alt="Guy working"
                  fill
                />
                <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0)_26.73%,rgba(0,0,0,.51)_49.94%,rgba(0,0,0,0)_59.28%,rgba(0,0,0,0)_100%)] absolute inset-0 bg-gray-900/5 blur-[3.4px]" />
                <div className="relative">
                  <button className="py-1.5 px-2 lg:py-2 lg:px-3 bg-primary-500 rounded-[4px] lg:rounded-[5px] focus-visible:outline-hidden flex items-center gap-x-2.5 text-xs lg:text-lg leading-none font-medium text-white">
                    <Briefcase className="size-4 lg:size-[21px]" /> For Clients
                  </button>

                  <div className="mt-[150px] lg:mt-[250px]">
                    <h1 className="text-[28px] lg:text-[38px] leading-none font-medium text-white">
                      Find work with Marketeq
                    </h1>

                    <p className="mt-2 lg:mt-3 text-[18px] lg:text-[30px] leading-none text-white/70">
                      Discover high-impact projects, full-time and part-time
                      roles, and career resources designed to grow your skills
                      and income.
                    </p>
                  </div>

                  <div className="mt-[30px] lg:mt-[50px] max-w-[865px] grid grid-cols-2 md:grid-cols-4 gap-3.5 lg:gap-x-5">
                    <div className="lg:pt-[28px] lg:pb-[20px] flex flex-col items-center p-5 lg:px-8 gap-y-4 lg:gap-y-5 rounded-lg bg-gray-900/26 blur-[13.98]">
                      <div className="size-[59.66px] lg:p-3.5 inline-flex items-center bg-white/5 rounded-full">
                        <ChartBreakoutCircle className="size-[27.79px] lg:size-[34px] text-white" />
                      </div>
                      <div className="flex items-center gap-x-[3.27px] lg:gap-x-1">
                        <span className="text-xs lg:text-sm font-bold leading-none text-white">
                          Find Opportunities
                        </span>
                        <ArrowRight className="size-[13.8px] lg:size-[17px] text-white" />
                      </div>
                    </div>
                    <div className="lg:pt-[28px] lg:pb-[20px] flex flex-col items-center p-5 lg:px-8 gap-y-4 lg:gap-y-5 rounded-lg bg-gray-900/26 blur-[13.98]">
                      <div className="size-[59.66px] lg:p-3.5 inline-flex items-center bg-white/5 rounded-full">
                        <Certificate01 className="size-[27.79px] lg:size-[34px] text-white" />
                      </div>
                      <div className="flex items-center gap-x-[3.27px] lg:gap-x-1">
                        <span className="text-xs lg:text-sm font-bold leading-none text-white">
                          Marketeq University
                        </span>
                        <ArrowRight className="size-[13.8px] lg:size-[17px] text-white" />
                      </div>
                    </div>
                    <div className="lg:pt-[28px] lg:pb-[20px] flex flex-col items-center p-5 lg:px-8 gap-y-4 lg:gap-y-5 rounded-lg bg-gray-900/26 blur-[13.98]">
                      <div className="size-[59.66px] lg:p-3.5 inline-flex items-center bg-white/5 rounded-full">
                        <Laptop01 className="size-[27.79px] lg:size-[34px] text-white" />
                      </div>
                      <div className="flex items-center gap-x-[3.27px] lg:gap-x-1">
                        <span className="text-xs lg:text-sm font-bold leading-none text-white">
                          Work Your Way
                        </span>
                        <ArrowRight className="size-[13.8px] lg:size-[17px] text-white" />
                      </div>
                    </div>
                    <div className="lg:pt-[28px] lg:pb-[20px] flex flex-col items-center p-5 lg:px-8 gap-y-4 lg:gap-y-5 rounded-lg bg-gray-900/26 blur-[13.98]">
                      <div className="size-[59.66px] lg:p-3.5 inline-flex items-center bg-white/5 rounded-full">
                        <CoinStack className="size-[27.79px] lg:size-[34px] text-white" />
                      </div>
                      <div className="flex items-center gap-x-[3.27px] lg:gap-x-1">
                        <span className="text-xs lg:text-sm font-bold leading-none text-white">
                          Flexible Payments
                        </span>
                        <ArrowRight className="size-[13.8px] lg:size-[17px] text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 lg:mt-6 max-lg:pb-10 lg:px-5">
              <div className="bg-primary-500/[.07] relative rounded-md lg:rounded-lg border border-primary-500/25 p-5 pb-[30px] pt-[45px] md:p-5 lg:p-[75px] drop-shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                <div className="size-[284px] absolute opacity-[.45] -translate-x-1/2 left-1/2 bottom-[-70.96px] bg-primary-500/20 blur-3xl" />
                <div className="size-[74.074px] absolute opacity-[.45] right-0 top-0 bg-primary-500/20 blur-3xl" />

                <div className="lg:max-w-[750.8px] flex md:flex-row flex-col items-center gap-5 lg:gap-x-[45px]">
                  <Avatar
                    className="size-[105px] lg:size-[132.12px] 3xl:size-[135.12px] border border-white"
                    size="2xl"
                  >
                    <AvatarImage src="/man.jpg" alt="Man" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>

                  <div className="space-y-5 lg:space-y-[13px] self-stretch">
                    <div className="md:max-lg:max-w-[443px]">
                      <h1 className="text-[13px] max-md:text-center lg:text-base leading-tight font-bold text-white">
                        “Marketeq helped us cut weeks off our hiring process by
                        connecting us to a scoped project and a vetted team that
                        hit the ground running, we accelerated delivery without
                        sacrificing quality.”
                      </h1>
                    </div>
                    <div className="lg:py-2 space-y-1">
                      <h3 className="font-bold max-md:text-center leading-none text-xs lg:text-sm text-white">
                        James Garcia
                      </h3>
                      <p className="text-xs lg:text-sm max-md:text-center leading-none text-white/40">
                        VP of Engineering at NovaForge
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-[50px] 3xl:px-[100px] 4xl:px-[150px] 5xl:px-[250px] border-t border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] bg-[linear-gradient(180deg,rgba(255,255,255,.04)_0%,rgba(255,255,255,.02)_50%,rgba(255,255,255,0)_100%)]">
          <div className="max-w-[1420px] mx-auto max-md:pl-3.5 max-lg:p-10 max-lg:pr-0 max-lg:pt-7 lg:pt-[75px] lg:border-x border-b border-primary-500/[.07] lg:px-5 lg:pb-[50px]">
            <div className="max-w-[227px] md:contents">
              <h1 className="text-[24px] lg:text-[38px] leading-tight font-medium text-white">
                Introducing Marketeq All Stars
              </h1>
            </div>
            <div className="max-w-[493px] lg:max-w-[791px] mt-2 lg:mt-3">
              <p className="text-lg lg:text-[30px] leading-tight text-white/40">
                A curated group of elite professionals selected for consistent
                delivery excellence across high-stakes projects.
              </p>
            </div>

            <Tabs
              className="mt-5 lg:mt-[50px]"
              defaultValue="programming-development-it"
            >
              <SwiperRoot className="introducing-carousel">
                <TabsPrimitive.List className="flex items-center relative justify-between gap-x-6">
                  <div className="inline-flex scrollbar-none items-center overflow-x-auto gap-x-2.5 lg:gap-x-3">
                    <TabsPrimitive.Trigger
                      className="h-[28.44px] cursor-pointer whitespace-nowrap lg:h-[34px] border-2 border-white/40 text-white/40 hover:text-white hover:border-white data-[state=active]:text-white data-[state=active]:border-white rounded-full focus-visible:outline-hidden px-[11.44px] lg:px-3.5 text-xs lg:text-sm font-medium"
                      value="programming-development-it"
                    >
                      Programming, Development & IT
                    </TabsPrimitive.Trigger>
                    <TabsPrimitive.Trigger
                      className="h-[28.44px] cursor-pointer whitespace-nowrap lg:h-[34px] border-2 border-white/40 text-white/40 hover:text-white hover:border-white data-[state=active]:text-white data-[state=active]:border-white rounded-full focus-visible:outline-hidden px-[11.44px] lg:px-3.5 text-xs lg:text-sm font-medium"
                      value="business"
                    >
                      Business
                    </TabsPrimitive.Trigger>
                    <TabsPrimitive.Trigger
                      className="h-[28.44px] cursor-pointer whitespace-nowrap lg:h-[34px] border-2 border-white/40 text-white/40 hover:text-white hover:border-white data-[state=active]:text-white data-[state=active]:border-white rounded-full focus-visible:outline-hidden px-[11.44px] lg:px-3.5 text-xs lg:text-sm font-medium"
                      value="design-art"
                    >
                      Design & Art
                    </TabsPrimitive.Trigger>
                    <TabsPrimitive.Trigger
                      className="h-[28.44px] cursor-pointer whitespace-nowrap lg:h-[34px] border-2 border-white/40 text-white/40 hover:text-white hover:border-white data-[state=active]:text-white data-[state=active]:border-white rounded-full focus-visible:outline-hidden px-[11.44px] lg:px-3.5 text-xs lg:text-sm font-medium"
                      value="sales-marketing"
                    >
                      Sales & Marketing
                    </TabsPrimitive.Trigger>
                    <TabsPrimitive.Trigger
                      className="h-[28.44px] cursor-pointer whitespace-nowrap lg:h-[34px] border-2 border-white/40 text-white/40 hover:text-white hover:border-white data-[state=active]:text-white data-[state=active]:border-white rounded-full focus-visible:outline-hidden px-[11.44px] lg:px-3.5 text-xs lg:text-sm font-medium"
                      value="writing-translation-language"
                    >
                      Writing, Translation & Language
                    </TabsPrimitive.Trigger>
                    <button className="h-[34px] cursor-pointer whitespace-nowrap inline-flex items-center gap-x-[5px] border-2 border-white/40 text-white/40 hover:text-white hover:border-white rounded-full focus-visible:outline-hidden px-3.5 text-sm font-medium">
                      View all <ArrowRight className="size-[12.75px]" />
                    </button>
                  </div>
                  <div className="3xl:hidden max-lg:hidden right-[100px] inset-y-0 absolute w-[208px] bg-[linear-gradient(90deg,rgba(9,21,47,0)_0%,rgba(13,19,32,0.5)_50%,rgba(11,17,30,1)_100%)]" />

                  <div className="inline-flex items-center max-lg:hidden gap-x-3">
                    <SwiperPrevTrigger className="size-8 data-[state=active]:cursor-pointer border border-white/20 rounded-full data-[state=active]:border-white data-[state=active]:text-white text-white/20 focus-visible:outline-hidden inline-flex items-center justify-center shrink-0">
                      <ChevronLeft className="size-4" />
                    </SwiperPrevTrigger>
                    <SwiperNextTrigger className="size-8 data-[state=active]:cursor-pointer border border-white/20 rounded-full data-[state=active]:border-white data-[state=active]:text-white text-white/20 focus-visible:outline-hidden inline-flex items-center justify-center shrink-0">
                      <ChevronRight className="size-4" />
                    </SwiperNextTrigger>
                  </div>
                </TabsPrimitive.List>

                <TabsContent value="programming-development-it">
                  <div className="mt-5 lg:pt-6 relative isolate">
                    <div className="absolute lg:block hidden z-10 bottom-0 top-0 lg:top-6 w-[109px] right-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(5,11,25,0.5)_50%,rgba(5,11,25,1)_100%)]" />

                    <SwiperContent
                      spaceBetween={14}
                      slidesPerView="auto"
                      breakpoints={{
                        1024: {
                          spaceBetween: 20,
                        },
                      }}
                    >
                      {fromLength(6).map((item) => (
                        <SwiperSlide key={item}>
                          <article className="border border-white/5 bg-[#091229] rounded-lg overflow-hidden shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)]">
                            <div className="p-4 lg:p-5">
                              <div className="h-[114.43px] lg:h-[140px] relative">
                                <div className="rounded-md overflow-hidden relative size-full">
                                  <Image
                                    className="object-cover transition-transform [transition-duration:3000ms] hover:scale-150 hover:rotate-3"
                                    src="/man.jpg"
                                    alt="Man"
                                    sizes="25vw"
                                    fill
                                  />
                                </div>

                                <div className="size-[23.7px] lg:size-[31.75px] absolute left-[-7.37px] bottom-[-7.25px] lg:left-[-9px] lg:bottom-[-8px] inline-flex items-center justify-center bg-success-500 rounded-full border-[2.22px] lg:border-[2.72px] border-[#131314]">
                                  <Check className="size-[12.26px] lg:size-[15px] border-[#131314]" />
                                </div>

                                <div className="h-[16.54px] lg:h-5 bg-black/[.57] absolute rounded-[5px] text-[8px] lg:text-[10px] top-[11.13px] left-[10px] leading-none font-bold text-white px-[4.9px] lg:px-1.5 inline-flex items-center gap-x-[3.27px] lg:gap-x-1">
                                  <Stars02 className="size-[8.82px] lg:size-[10.8px]" />{" "}
                                  All Stars
                                </div>

                                <Favorite className="absolute cursor-pointer fill-transparent text-white max-lg:size-[16.35px] top-[10px] right-[10px]" />
                              </div>

                              <div className="mt-3">
                                <h1 className="text-xs lg:text-sm inline-flex items-center leading-none font-bold text-white">
                                  85 - $120{" "}
                                  <span className="text-[9px] lg:text-[10px] leading-none font-light">
                                    /hr
                                  </span>
                                </h1>
                                <div className="mt-3">
                                  <h1 className="text-xs lg:text-sm leading-none text-white">
                                    Priya{" "}
                                    <span className="font-light text-[10px] lg:text-xs text-gray-500">
                                      @Tech Sential
                                    </span>
                                  </h1>
                                  <h2 className="text-[10px] lg:text-xs leading-none mt-0.5 font-medium text-white">
                                    Data Scientist
                                  </h2>
                                  <p className="text-[9px] lg:text-[11px] mt-[7px] lg:mt-2 font-light leading-none text-white">
                                    7 years of experience
                                  </p>

                                  <div className="mt-3 lg:mt-3.5 inline-flex items-center gap-x-[3px] lg:gap-x-0.5">
                                    <MarkerPin02 className="size-[9.8px] lg:size-3 text-gray-500" />{" "}
                                    <div className="text-[9px] lg:text-[10px] leading-[13.08px] lg:leading-4 text-gray-500 font-light">
                                      <span className="font-medium">
                                        Ukraine
                                      </span>{" "}
                                      (8:03pm local time)
                                    </div>
                                  </div>

                                  <div className="mt-3 lg:mt-3.5 flex items-center gap-x-[7px] lg:gap-x-2">
                                    <div className="py-[2.45px] lg:py-[3px] px-[4.9px] lg:px-1.5 flex items-center gap-x-[4.09px] lg:gap-x-[5px] rounded-[2.48px] lg:rounded-[3.03px] text-white bg-white/[.07] text-[10px] lg:text-xs leading-none font-medium shadow-[0px_0.57px_1.14px_0px_rgba(16,24,40,.05);]">
                                      <div className="inline-flex items-center gap-x-[3px]">
                                        <Star className="size-3 fill-primary-500 text-primary-500" />
                                        <Star className="size-3 fill-primary-500 text-primary-500" />
                                        <Star className="size-3 fill-primary-500 text-primary-500" />
                                        <Star className="size-3 fill-primary-500 text-primary-500" />
                                        <Star className="size-3 fill-primary-500 text-primary-500" />
                                      </div>
                                      4.9
                                    </div>

                                    <div className="inline-flex items-center gap-x-0.5">
                                      <span className="text-[10px] lg:text-xs font-medium text-white leading-none">
                                        16
                                      </span>
                                      <span className="text-[10px] lg:text-xs font-medium text-white leading-none">
                                        projects
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-2.5 lg:p-3 bg-white/3 flex flex-wrap gap-[7px] lg:gap-2">
                              <Link
                                className="text-[9px] lg:text-[10px] hover:underline transition duration-300 text-gray-500 font-medium leading-5 focus-visible:outline-hidden"
                                href="#"
                              >
                                Web Development
                              </Link>
                              <Link
                                className="text-[9px] lg:text-[10px] hover:underline transition duration-300 text-gray-500 font-medium leading-5 focus-visible:outline-hidden"
                                href="#"
                              >
                                Motion Design
                              </Link>
                              <Link
                                className="text-[9px] lg:text-[10px] hover:underline transition duration-300 text-gray-500 font-medium leading-5 focus-visible:outline-hidden"
                                href="#"
                              >
                                Data Visualization
                              </Link>
                              <Link
                                className="text-[9px] lg:text-[10px] hover:underline transition duration-300 text-gray-500 font-medium leading-5 focus-visible:outline-hidden"
                                href="#"
                              >
                                Information Architecture
                              </Link>
                              <Link
                                className="text-[9px] lg:text-[10px] hover:underline transition duration-300 text-gray-500 font-medium leading-5 focus-visible:outline-hidden"
                                href="#"
                              >
                                (CRO) Design
                              </Link>
                              <Link
                                className="text-[9px] lg:text-[10px] hover:underline transition duration-300 text-gray-500 font-medium leading-5 focus-visible:outline-hidden"
                                href="#"
                              >
                                3D Design
                              </Link>

                              <Button
                                className="font-bold cursor-pointer ml-auto text-[10px] leading-5 max-lg:text-[8px] max-lg:leading-[16.35px]"
                                variant="link"
                                visual="gray"
                              >
                                More...
                              </Button>
                            </div>
                          </article>
                        </SwiperSlide>
                      ))}
                    </SwiperContent>
                  </div>
                </TabsContent>
              </SwiperRoot>
            </Tabs>
          </div>
        </div>

        <div className="lg:px-[50px] 3xl:px-[100px] 4xl:px-[150px] 5xl:px-[250px] relative bg-black">
          <div className="absolute inset-0 bg-primary-500/10" />
          <div className="relative px-3.5 py-10 md:max-lg:p-10 max-lg:pr-0 max-w-[1420px] lg:border-x border-b border-primary-500/[.07] mx-auto px-5 py-[50px]">
            <SwiperRoot className="meet-carousel">
              <div className="relative lg:pb-6">
                <div className="md:max-lg:pr-3.5">
                  <h1 className="text-[28px] lg:text-[38px] leading-none font-medium text-white">
                    Meet Our Teams
                  </h1>
                  <div className="max-w-[619px] lg:max-w-[791px] mt-2 lg:mt-3">
                    <p className="text-[24px] lg:text-[30px] leading-none text-white/40">
                      A curated group of elite professionals selected for
                      consistent delivery excellence across high-stakes
                      projects.
                    </p>
                  </div>
                </div>

                <div className="inline-flex max-lg:hidden absolute right-0 bottom-0 items-center gap-x-3">
                  <SwiperPrevTrigger className="size-8 data-[state=active]:cursor-pointer border border-white/20 rounded-full data-[state=active]:border-white data-[state=active]:text-white text-white/20 focus-visible:outline-hidden inline-flex items-center justify-center shrink-0">
                    <ChevronLeft className="size-4" />
                  </SwiperPrevTrigger>
                  <SwiperNextTrigger className="size-8 data-[state=active]:cursor-pointer border border-white/20 rounded-full data-[state=active]:border-white data-[state=active]:text-white text-white/20 focus-visible:outline-hidden inline-flex items-center justify-center shrink-0">
                    <ChevronRight className="size-4" />
                  </SwiperNextTrigger>
                </div>
              </div>

              <div className="mt-[30px] lg:mt-6 relative isolate">
                <div className="absolute lg:block hidden z-10 inset-y-0 w-[215px] right-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(5,11,25,0.5)_50%,rgba(5,11,25,1)_100%)]" />

                <SwiperContent
                  spaceBetween={16.35}
                  slidesPerView="auto"
                  breakpoints={{
                    1024: {
                      spaceBetween: 20,
                    },
                  }}
                >
                  {fromLength(4).map((item) => (
                    <SwiperSlide key={item}>
                      <article className="bg-[#091229] flex drop-shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)] border border-white/5 rounded-lg overflow-hidden">
                        <div className="p-4 lg:p-5 shrink-0 w-[299px]">
                          <h1 className="text-xs lg:text-sm font-bold text-white leading-none">
                            85 - $120{" "}
                            <span className="text-[9px] lg:text-[10px] leading-none font-light">
                              /hr
                            </span>
                          </h1>

                          <div className="mt-[34.81px] lg:mt-[42.97px]">
                            <h1 className="text-[13px] font-bold lg:text-sm leading-none text-white">
                              Team Name{" "}
                              <span className="font-light text-xs text-gray-500">
                                @Tech Sential
                              </span>
                            </h1>
                            <h2 className="text-[9px] lg:text-[10px] lg:text-xs leading-none mt-0.5 font-medium text-white">
                              Development team
                            </h2>
                            <p className="text-[9px] lg:text-[11px] mt-[7px] lg:mt-2 font-light leading-none text-white">
                              Average 10 years of experience
                            </p>

                            <div className="mt-3 lg:mt-3.5 inline-flex items-center gap-x-[3px] lg:gap-x-0.5">
                              <MarkerPin02 className="size-[9.8px] lg:size-3 text-gray-500" />{" "}
                              <div className="text-[9px] leading-[13.08px] lg:text-[10px] lg:leading-4 text-gray-500 font-medium">
                                UK, USA, Brazil, Philippines, more...
                              </div>
                            </div>

                            <div className="mt-3 lg:mt-3.5 flex items-center gap-x-[7px] lg:gap-x-2">
                              <div className="py-[2.45px] px-[4.9px] lg:py-[3px] lg:px-1.5 flex items-center gap-x-[4.09px] lg:gap-x-[5px] rounded-[2.45px] lg:rounded-[3.03px] text-white bg-white/[.07] text-[10px] lg:text-xs leading-none font-medium shadow-[0px_0.57px_1.14px_0px_rgba(16,24,40,.05);]">
                                <div className="inline-flex items-center gap-x-[2.45px] lg:gap-x-[3px]">
                                  <Star className="size-[9.8px] lg:size-3 fill-primary-500 text-primary-500" />
                                  <Star className="size-[9.8px] lg:size-3 fill-primary-500 text-primary-500" />
                                  <Star className="size-[9.8px] lg:size-3 fill-primary-500 text-primary-500" />
                                  <Star className="size-[9.8px] lg:size-3 fill-primary-500 text-primary-500" />
                                  <Star className="size-[9.8px] lg:size-3 fill-primary-500 text-primary-500" />
                                </div>
                                4.9
                              </div>

                              <div className="inline-flex items-center gap-x-[1.63px] lg:gap-x-0.5">
                                <span className="text-[10px] lg:text-xs font-medium text-white leading-none">
                                  16
                                </span>
                                <span className="text-[10px] lg:text-xs font-medium text-white leading-none">
                                  projects
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-[34.81px] lg:mt-[42.97px] flex flex-wrap gap-1.5 lg:gap-2">
                            <Badge
                              size="sm"
                              visual="gray"
                              className="rounded-full max-lg:py-[1.63px] max-lg:px-[6.54px] max-lg:text-[10px] bg-white/[.07] text-white"
                            >
                              iOS
                            </Badge>
                            <Badge
                              size="sm"
                              visual="gray"
                              className="rounded-full max-lg:py-[1.63px] max-lg:px-[6.54px] max-lg:text-[10px] bg-white/[.07] text-white"
                            >
                              E-commerce
                            </Badge>
                            <Badge
                              size="sm"
                              visual="gray"
                              className="rounded-full max-lg:py-[1.63px] max-lg:px-[6.54px] max-lg:text-[10px] bg-white/[.07] text-white"
                            >
                              Mobile Application
                            </Badge>
                            <Badge
                              size="sm"
                              visual="gray"
                              className="rounded-full max-lg:py-[1.63px] max-lg:px-[6.54px] max-lg:text-[10px] bg-white/[.07] text-white"
                            >
                              Small Business
                            </Badge>
                            <Badge
                              size="sm"
                              visual="gray"
                              className="rounded-full max-lg:py-[1.63px] max-lg:px-[6.54px] max-lg:text-[10px] bg-white/[.07] text-white"
                            >
                              Software Development
                            </Badge>
                            <button className="h-[18.26px] lg:h-[22px] text-white lg:text-xs lg:leading-[18px] text-[10px] leading-[14.71px] font-medium px-[6.54px] lg:px-2 shrink-0 focus-visible:outline-hidden">
                              + 10 more
                            </button>
                          </div>

                          <div className="mt-[34.81px] lg:mt-[47.97px]">
                            <h3 className="text-[9px] lg:text-[10px] text-white font-light leading-none">
                              Previous clients
                            </h3>

                            <div className="flex gap-x-[10px] lg:gap-x-3 mt-[7px] lg:mt-2 items-center">
                              <AdobeBrand className="size-[22.88px] lg:size-7 shrink-0" />
                              <GoogleBrand className="size-[22.88px] lg:size-7 shrink-0" />
                              <WordpressBrand className="size-[22.88px] lg:size-7 shrink-0" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-auto bg-white/3 px-[22.89px] py-[18.8px] lg:px-[28px] lg:py-[23px]">
                          <h3 className="text-[10px] lg:text-xs leading-none text-white">
                            Team Members (6)
                          </h3>

                          <div className="relative mt-5 lg:mt-[26px] h-[241.06px] lg:h-[294.92px]">
                            <div className="absolute top-0 left-0">
                              <Avatar
                                size="2xl"
                                className="size-[143.04px] hover:ring-0 lg:size-[175px]"
                              >
                                <AvatarImage src="/man.jpg" alt="Man" />
                                <AvatarFallback>M</AvatarFallback>
                              </Avatar>
                              <div className="absolute top-[8px] right-[-75.16px] lg:right-[-91.75] lg:top-[27.45px] space-y-[7px] lg:space-y-2">
                                <div className="px-[5px] py-[3px] lg:px-1.5 lg:py-1 inline-flex items-center gap-x-2 lg:gap-x-2.5 bg-[#08132C] rounded-[5px] border-[.5px] border-white/5 shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)]">
                                  <Stars02 className="size-[8.82px] lg:size-[10.8px] text-white" />{" "}
                                  <span className="font-bold leading-none text-[8px] lg:text-[10px] text-white">
                                    All Star
                                  </span>
                                </div>

                                <div className="py-[10px] pr-[15px] pl-[12px] lg:py-3 lg:pr-[18px] lg:pl-3.5 space-y-[1.63px] lg:space-y-0.5 bg-[#08132C] border-[.5px] rounded-[5px] border-white/5 shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)]">
                                  <h3 className="text-[9px] lg:text-[10px] leading-none font-bold text-white">
                                    Username
                                  </h3>
                                  <p className="text-gray-500 text-[8px] lg:text-[10px] leading-none">
                                    Full-stack Developer
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="absolute bottom-0 left-[30.49px] lg:left-[34.88px]">
                              <Avatar
                                size="2xl"
                                className="size-[85.82px] hover:ring-0 lg:size-[105px]"
                              >
                                <AvatarImage src="/man.jpg" alt="Man" />
                                <AvatarFallback>M</AvatarFallback>
                              </Avatar>
                              <div className="absolute right-[-88.53px] top-[37.94px] lg:right-[-108.71px] lg:top-[46.42px] space-y-2">
                                <div className="py-[10px] pr-[15px] pl-[12px] lg:py-3 lg:pr-[18px] lg:pl-3.5 space-y-[1.63px] lg:space-y-0.5 bg-[#08132C] border-[.5px] rounded-[5px] border-white/5 shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)]">
                                  <h3 className="text-[9px] lg:text-[10px] leading-none font-bold text-white">
                                    Username
                                  </h3>
                                  <p className="text-gray-500 text-[8px] lg:text-[10px] leading-none">
                                    Full-stack Developer
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="absolute bottom-[60.52px] lg:bottom-[74.04px] left-[147.63px] lg:left-[174.72px]">
                              <Avatar
                                size="2xl"
                                className="size-[85.82px] hover:ring-0 lg:size-[105px]"
                              >
                                <AvatarImage src="/woman.jpg" alt="Man" />
                                <AvatarFallback>M</AvatarFallback>
                              </Avatar>
                              <div className="absolute top-[19.27px] right-[-90.99px] lg:right-[-110.65px] lg:top-[23.58px] space-y-2">
                                <div className="px-[5px] py-[3px] lg:px-1.5 lg:py-1 inline-flex items-center gap-x-2 lg:gap-x-2.5 bg-[#08132C] rounded-[5px] border-[.5px] border-white/5 shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)]">
                                  <Stars02 className="size-[8.82px] lg:size-[10.8px] text-white" />{" "}
                                  <span className="font-bold leading-none text-[8px] lg:text-[10px] text-white">
                                    All Star
                                  </span>
                                </div>

                                <div className="py-[10px] pr-[15px] pl-[12px] lg:py-3 lg:pr-[18px] lg:pl-3.5 space-y-[1.63px] lg:space-y-0.5 bg-[#08132C] border-[.5px] rounded-[5px] border-white/5 shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)]">
                                  <h3 className="text-[9px] lg:text-[10px] leading-none font-bold text-white">
                                    Username
                                  </h3>
                                  <p className="text-gray-500 text-[8px] lg:text-[10px] leading-none">
                                    Full-stack Developer
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-1 flex justify-end relative">
                            <div className="inline-flex flex-col items-start gap-y-2.5 lg:gap-y-3">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <AvatarGroup
                                      className="max-lg:-space-x-1"
                                      size="sm"
                                    >
                                      <Avatar
                                        size="sm"
                                        className="border-2 max-lg:size-[26.16px] border-white hover:ring-0 active:ring-0"
                                      >
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar
                                        size="sm"
                                        className="border-2 max-lg:size-[26.16px] border-white hover:ring-0 active:ring-0"
                                      >
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar
                                        size="sm"
                                        className="border-2 max-lg:size-[26.16px] border-white hover:ring-0 active:ring-0"
                                      >
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar
                                        size="sm"
                                        className="border-2 max-lg:size-[26.16px] border-white hover:ring-0 active:ring-0"
                                      >
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar
                                        size="sm"
                                        className="border-2 max-lg:size-[26.16px] border-white hover:ring-0 active:ring-0"
                                      >
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar
                                        size="sm"
                                        className="border-2 max-lg:size-[26.16px] border-white hover:ring-0 active:ring-0"
                                      >
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                    </AvatarGroup>
                                  </TooltipTrigger>
                                  <TooltipContent className="p-0" size="md">
                                    <ScrollArea
                                      className="h-[192px] p-3 pr-4"
                                      scrollBar={
                                        <ScrollBar
                                          className="w-4 p-1"
                                          thumbClassName="bg-white/20"
                                        />
                                      }
                                    >
                                      <div className="space-y-3 pr-5">
                                        <div className="flex items-center gap-x-2">
                                          <Avatar className="hover:ring-0 active:ring-0">
                                            <AvatarImage
                                              src="/woman.jpg"
                                              alt="Woman"
                                            />
                                            <AvatarFallback>W</AvatarFallback>
                                          </Avatar>
                                          <span className="text-xs font-medium leading-5">
                                            Woman
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                          <Avatar className="hover:ring-0 active:ring-0">
                                            <AvatarImage
                                              src="/woman.jpg"
                                              alt="Woman"
                                            />
                                            <AvatarFallback>W</AvatarFallback>
                                          </Avatar>
                                          <span className="text-xs font-medium leading-5">
                                            Woman
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                          <Avatar className="hover:ring-0 active:ring-0">
                                            <AvatarImage
                                              src="/woman.jpg"
                                              alt="Woman"
                                            />
                                            <AvatarFallback>W</AvatarFallback>
                                          </Avatar>
                                          <span className="text-xs font-medium leading-5">
                                            Woman
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                          <Avatar className="hover:ring-0 active:ring-0">
                                            <AvatarImage
                                              src="/woman.jpg"
                                              alt="Woman"
                                            />
                                            <AvatarFallback>W</AvatarFallback>
                                          </Avatar>
                                          <span className="text-xs font-medium leading-5">
                                            Woman
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                          <Avatar className="hover:ring-0 active:ring-0">
                                            <AvatarImage
                                              src="/woman.jpg"
                                              alt="Woman"
                                            />
                                            <AvatarFallback>W</AvatarFallback>
                                          </Avatar>
                                          <span className="text-xs font-medium leading-5">
                                            Woman
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                          <Avatar className="hover:ring-0 active:ring-0">
                                            <AvatarImage
                                              src="/woman.jpg"
                                              alt="Woman"
                                            />
                                            <AvatarFallback>W</AvatarFallback>
                                          </Avatar>
                                          <span className="text-xs font-medium leading-5">
                                            Woman
                                          </span>
                                        </div>
                                      </div>
                                    </ScrollArea>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              <Button
                                className="text-white group cursor-pointer max-lg:text-[10px] max-lg:gap-x-[5px] max-lg:gap-x-[5px]"
                                size="sm"
                                variant="link"
                                visual="gray"
                              >
                                3 more team members{" "}
                                <ArrowRight className="size-[12px] transition duration-300 group-hover:translate-x-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  ))}
                </SwiperContent>
              </div>
            </SwiperRoot>
          </div>

          <div className="py-10 px-3.5 md:p-10 relative lg:py-[50px] lg:px-5 lg:border-x border-b border-primary-500/[.07] max-w-[1420px] mx-auto">
            <div className="flex flex-col max-lg:gap-y-10 3xl:flex-row lg:flex-col-reverse 3xl:items-start 3xl:justify-between">
              <div className="max-[555px] lg:max-w-[705px] 3xl:max-w-[726.56px]">
                <h1 className="text-[28px] lg:text-[38px] leading-none font-medium text-white">
                  Top Skills
                </h1>
                <p className="text-[24px] lg:text-[30px] mt-[9.81px] lg:mt-3 text-white/40">
                  Work with experts trusted across industries who bring the
                  skills your project needs to move forward.
                </p>
              </div>

              <div className="inline-flex items-center gap-x-5 lg:gap-x-6">
                <Button
                  className="max-lg:h-9 cursor-pointer max-lg:px-4 max-lg:text-[13px] max-lg:leading-[19.62px] rounded-full border-2 hover:bg-primary-500 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] hover:border-primary-500 border-white text-white"
                  visual="gray"
                  size="xl"
                  variant="outlined"
                >
                  Start Hiring Now
                </Button>
                <Button
                  className="max-lg:h-9 cursor-pointer max-lg:px-4 max-lg:text-[13px] max-lg:leading-[19.62px] group rounded-full hover:bg-primary-500 hover:text-white bg-white text-black shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]"
                  visual="gray"
                  size="xl"
                >
                  View all skills{" "}
                  <ArrowRight className="size-[14.71px] lg:size-[18px] transition duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            <div className="mt-10 lg:mt-[50px]">
              <div className="relative">
                <div
                  className={cn(
                    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-x-3 3xl:gap-x-3.5",
                    {
                      "h-[558.26px] md:h-[688px] lg:h-[755px] overflow-hidden":
                        areTopSkillsNotVisible,
                    }
                  )}
                >
                  {fromLength(5).map((item) => (
                    <div key={item} className="grid gap-y-3 3xl:gap-y-3.5">
                      <article className="rounded-lg border bg-[#091229] p-4 border-white/5 shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)]">
                        <Cloud01 className="size-[28px] text-primary-500" />
                        <h1 className="mt-3 font-bold leading-none text-base text-white">
                          DevOps & Cloud Computing
                        </h1>
                        <div className="mt-3 flex flex-col items-start">
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            DevOps Engineers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Data Engineers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Database Developers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            AWS Developers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Distributed Systems Engineers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Docker Developers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Kubernetes Developers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Google Cloud Developers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Azure Developers
                          </Button>
                        </div>

                        <Button
                          className="text-white mt-3 cursor-pointer"
                          variant="link"
                          visual="gray"
                        >
                          <Plus className="size-[15px]" />8 more...
                        </Button>
                      </article>
                      <article className="rounded-lg border bg-[#091229] p-4 border-white/5 shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)]">
                        <IntersectCircle className="size-[28px] text-primary-500" />
                        <h1 className="mt-3 font-bold leading-none text-base text-white">
                          API Development & Integration
                        </h1>
                        <div className="mt-3 flex flex-col items-start">
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            LinkedIn API Developers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Facebook API Developers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            API Development Specialists
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Shopify API Developers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Stripe Developers
                          </Button>
                        </div>

                        <Button
                          className="text-white mt-3 cursor-pointer"
                          variant="link"
                          visual="gray"
                        >
                          <Plus className="size-[15px]" />5 more...
                        </Button>
                      </article>
                      <article className="rounded-lg border bg-[#091229] p-4 border-white/5 shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)]">
                        <Monitor03 className="size-[28px] text-primary-500" />
                        <h1 className="mt-3 font-bold leading-none text-base text-white">
                          Desktop Development
                        </h1>
                        <div className="mt-3 flex flex-col items-start">
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            LinkedIn API Developers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Facebook API Developers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            API Development Specialists
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Shopify API Developers
                          </Button>
                          <Button
                            className="text-[13px] leading-6 text-white/40 hover:text-white cursor-pointer hover:no-underline font-medium"
                            variant="link"
                            visual="gray"
                          >
                            Stripe Developers
                          </Button>
                        </div>

                        <Button
                          className="text-white mt-3 cursor-pointer"
                          variant="link"
                          visual="gray"
                        >
                          <Plus className="size-[15px]" />5 more...
                        </Button>
                      </article>
                    </div>
                  ))}
                </div>

                {areTopSkillsNotVisible && (
                  <div className="h-[362px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(5,11,25,.5)_50%,rgba(5,11,25,1)_100%)] absolute left-0 right-0 bottom-0" />
                )}
              </div>

              {areTopSkillsNotVisible && (
                <div className="mt-5 lg:mt-6 flex items-center justify-center">
                  <Button
                    className="rounded-full cursor-pointer max-lg:h-9 max-lg:py-2 max-lg:px-4 max-lg:text-[13px] max-lg:leading-[19.62px] border-2 hover:bg-primary-500 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] hover:border-primary-500 border-white text-white"
                    visual="gray"
                    size="xl"
                    variant="outlined"
                    onClick={() => setAreTopSkillsNotVisible(false)}
                  >
                    View more
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="py-10 pl-3.5 md:p-10 relative pr-0 lg:px-5 lg:py-[50px] max-w-[1420px] mx-auto border-x border-b border-primary-500/[.07]">
            <div className="relative isolate">
              <SwiperRoot className="carousel-01">
                <div className="absolute lg:block hidden inset-y-0 z-10 w-[509px] right-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(5,11,25,0.5)_50%,rgba(5,11,25,1)_100%)]" />
                <SwiperNextTrigger className="max-lg:hidden data-[state=active]:cursor-pointer size-[75px] absolute focus-visible:outline-hidden z-10 -translate-y-1/2 top-1/2 right-[-37.5px] rounded-full shrink-0 border border-white/10 data-[state=active]:hover:border-white text-white/40 data-[state=active]:hover:text-white transition duration-300 inline-flex items-center justify-center">
                  <ChevronRight className="size-[35px]" />
                </SwiperNextTrigger>

                <SwiperContent
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    1440: {
                      slidesPerView: 2,
                    },
                    1024: {
                      spaceBetween: 24,
                    },
                  }}
                >
                  {fromLength(3).map((item) => (
                    <SwiperSlide key={item}>
                      <article className="p-[50px] relative rounded-lg bg-primary-500/[.07] border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                        <div className="size-[355px] absolute opacity-[.45] bottom-[-61.26px] left-0 bg-primary-500/20 blur-3xl" />
                        <div className="size-[74.074px] absolute opacity-[.45] top-0 right-0 bg-primary-500/20 blur-3xl" />

                        <div className="flex lg:flex-row flex-col lg:items-start gap-y-[26.16px] lg:gap-x-[51.98px]">
                          <Image
                            className="object-contain shrink-0 h-auto flex-none"
                            src="/friday.png"
                            alt="Friday"
                            height={84.65}
                            width={140}
                          />

                          <div className="space-y-6 flex-auto">
                            <h3 className="font-bold leading-none text-xs lg:text-sm text-white">
                              “A quote from director or point of contact about
                              what went well with using our services and what is
                              the positive impact on the company.”
                            </h3>

                            <div className="flex items-center gap-x-[9.81px] lg:gap-x-3">
                              <Avatar
                                className="size-[61.30px] lg:size-[75px]"
                                size="xl"
                              >
                                <AvatarImage src="/man.jpg" alt="Man" />
                                <AvatarFallback>M</AvatarFallback>
                              </Avatar>

                              <div className="space-y-1">
                                <h1 className="text-xs lg:text-sm leading-none font-bold text-white">
                                  Jane Doe
                                </h1>
                                <p className="text-xs lg:text-sm leading-none text-white/40">
                                  VP of Engineering at NovaForge
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 lg:mt-[50px] gap-x-3.5 justify-between flex items-center">
                          <div className="max-w-[122.208px] space-y-2">
                            <h1 className="leading-none font-bold text-xl lg:text-[24px] text-white">
                              20%
                            </h1>
                            <p className="text-xs leading-none text-white">
                              Increase statistics
                            </p>
                          </div>
                          <div className="max-w-[122.208px] space-y-2">
                            <h1 className="leading-none font-bold text-xl lg:text-[24px] text-white">
                              98%
                            </h1>
                            <p className="text-xs leading-none text-white">
                              Increased statistics
                            </p>
                          </div>
                          <div className="max-w-[122.208px] space-y-2">
                            <h1 className="leading-none font-bold text-xl lg:text-[24px] text-white">
                              5,000
                            </h1>
                            <p className="text-xs leading-none text-white">
                              Increased statistics
                            </p>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  ))}
                </SwiperContent>
              </SwiperRoot>
            </div>
          </div>

          <div className="py-10 px-3.5 md:p-10 relative lg:px-5 lg:py-[50px] max-w-[1420px] mx-auto border-x border-b border-primary-500/[.07]">
            <h1 className="text-[24px] lg:text-[38px] leading-none font-medium text-white">
              Our Unique Approach
            </h1>
            <div className="mt-10 lg:mt-[75px] grid grid-cols-2 md:grid-cols-3 gap-x-3.5 gap-y-[30px] lg:gap-x-[95px] 3xl:gap-x-[150px] lg:gap-y-[75px]">
              <article className="relative">
                <div className="rounded-full size-[37.6px] lg:size-[46px] shrink-0 bg-primary-500/[.07] inline-flex items-center justify-center border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                  <Briefcase className="size-[13.9px] lg:size-[17px] text-primary-500" />
                </div>

                <div className="mt-5 lg:mt-6">
                  <h1 className="text-[15px] lg:text-base font-medium leading-none text-white">
                    Projects Done Right
                  </h1>
                  <p className="mt-2.5 lg:mt-3 text-white/40 text-[13px] lg:text-base leading-none">
                    Start with pre-scoped work that’s clear from day one so you
                    move faster and always know what’s coming next.
                  </p>
                </div>
              </article>
              <article className="relative">
                <div className="rounded-full size-[37.6px] lg:size-[46px] shrink-0 bg-primary-500/[.07] inline-flex items-center justify-center border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                  <Users03 className="size-[13.9px] lg:size-[17px] text-primary-500" />
                </div>

                <div className="mt-5 lg:mt-6">
                  <h1 className="text-[15px] lg:text-base font-medium leading-none text-white">
                    Teams That Click
                  </h1>
                  <p className="mt-2.5 lg:mt-3 text-white/40 text-[13px] lg:text-base leading-none">
                    Get teams already working together with the right mix of
                    skills so your project runs smoother and gets done right.
                  </p>
                </div>
              </article>
              <article className="relative">
                <div className="rounded-full size-[37.6px] lg:size-[46px] shrink-0 bg-primary-500/[.07] inline-flex items-center justify-center border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                  <Speedometer04 className="size-[13.9px] lg:size-[17px] text-primary-500" />
                </div>

                <div className="mt-5 lg:mt-6">
                  <h1 className="text-[15px] lg:text-base font-medium leading-none text-white">
                    Built For Your Goals
                  </h1>
                  <p className="mt-2.5 lg:mt-3 text-white/40 text-[13px] lg:text-base leading-none">
                    Choose full-time, part-time, or flexible setups that grow
                    with your business so you stay on track at every stage.
                  </p>
                </div>
              </article>
              <article className="relative">
                <div className="rounded-full size-[37.6px] lg:size-[46px] shrink-0 bg-primary-500/[.07] inline-flex items-center justify-center border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                  <Speedometer04 className="size-[13.9px] lg:size-[17px] text-primary-500" />
                </div>

                <div className="mt-5 lg:mt-6">
                  <h1 className="text-[15px] lg:text-base font-medium leading-none text-white">
                    Faster From The Start
                  </h1>
                  <p className="mt-2.5 lg:mt-3 text-white/40 text-[13px] lg:text-base leading-none">
                    Use smart filters and recommendations to lock in your
                    project and team quickly so you can launch without the usual
                    delays.
                  </p>
                </div>
              </article>
              <article className="relative">
                <div className="rounded-full size-[37.6px] lg:size-[46px] shrink-0 bg-primary-500/[.07] inline-flex items-center justify-center border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                  <Award01 className="size-[13.9px] lg:size-[17px] text-primary-500" />
                </div>

                <div className="mt-5 lg:mt-6">
                  <h1 className="text-[15px] lg:text-base font-medium leading-none text-white">
                    Quality You Can See
                  </h1>
                  <p className="mt-2.5 lg:mt-3 text-white/40 text-[13px] lg:text-base leading-none">
                    Explore real work and proven outcomes from top teams so you
                    feel confident in who you hire and what you’ll get.
                  </p>
                </div>
              </article>
              <article className="relative">
                <div className="rounded-full size-[37.6px] lg:size-[46px] shrink-0 bg-primary-500/[.07] inline-flex items-center justify-center border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                  <ShieldZap className="size-[13.9px] lg:size-[17px] text-primary-500" />
                </div>

                <div className="mt-5 lg:mt-6">
                  <h1 className="text-[15px] lg:text-base font-medium leading-none text-white">
                    Trust That Lasts
                  </h1>
                  <p className="mt-2.5 lg:mt-3 text-white/40 text-[13px] lg:text-base leading-none">
                    Join thousands of businesses who rely on us again and again
                    because we make every project simple, clear, and built to
                    succeed.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="py-10 px-3.5 md:p-10 relative lg:px-5 lg:py-[50px] max-w-[1420px] mx-auto lg:border-x border-b border-primary-500/[.07]">
            <div className="grid md:grid-cols-2">
              <div className="bg-[#12B76A] max-md:h-[220px] relative overflow-hidden rounded-l-lg">
                <Image
                  className="object-contain object-center"
                  src="/lady-with-laptop.png"
                  alt="Lady with a laptop"
                  sizes="50vw"
                  fill
                />
              </div>
              <div className="p-5 lg:p-[50px] bg-primary-500/[.07] rounded-r-lg border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                <h1 className="text-[20px] lg:text-[24px] leading-none font-bold text-white">
                  Find the right project within minutes
                </h1>

                <div className="mt-5 lg:mt-[50px] space-y-3.5 lg:space-y-8">
                  <div className="flex items-start gap-x-5 lg:gap-x-6">
                    <h2 className="text-[34px] lg:text-[40px] whitespace-nowrap leading-none text-white font-medium">
                      1
                    </h2>
                    <div className="space-y-1.5 lg:space-y-2">
                      <h1 className="text-[15px] lg:text-lg text-white leading-none font-medium">
                        Search and Filter
                      </h1>
                      <p className="text-[13px] lg:text-base leading-tight text-white/40">
                        Use powerful filters to browse thousands of projects and
                        quickly zero in on what fits your goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-x-5 lg:gap-x-6">
                    <h2 className="text-[34px] lg:text-[40px] whitespace-nowrap leading-none text-white font-medium">
                      2
                    </h2>
                    <div className="space-y-1.5 lg:space-y-2">
                      <h1 className="text-[15px] lg:text-lg text-white leading-none font-medium">
                        Customize Your Pick
                      </h1>
                      <p className="text-[13px] lg:text-base leading-tight text-white/40">
                        Tailor the scope and setup so your project lines up
                        perfectly with your needs before you kick off.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-x-5 lg:gap-x-6">
                    <h2 className="text-[34px] lg:text-[40px] whitespace-nowrap leading-none text-white font-medium">
                      3
                    </h2>

                    <div className="space-y-1.5 lg:space-y-2">
                      <h1 className="text-[15px] lg:text-lg text-white leading-none font-medium">
                        Start with a Team
                      </h1>
                      <p className="text-[13px] lg:text-base leading-tight text-white/40">
                        Launch fast with the right team already in place so you
                        can focus on results instead of managing freelancers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-[75px] md:flex md:items-center md:justify-center">
              <div className="max-lg:px-[59.19px] max-md:px-[15px] lg:max-w-[714.36px] mx-auto flex items-center flex-col md:flex-row gap-5 lg:gap-x-6">
                <h3 className="text-[15px] max-md:text-center lg:text-lg leading-tight text-white/40">
                  Get the solution you’ve been looking for with a platform that
                  makes it easy to plan launch and see your project succeed.
                </h3>
                <Button
                  className="bg-white cursor-pointer max-lg:h-9 max-lg:pr-3 max-lg:gap-x-1.5 max-lg:pl-4 max-lg:text-[13px] max-lg:leading-[19.62px] text-black hover:bg-primary-500 hover:text-white rounded-full"
                  size="xl"
                >
                  Start Today{" "}
                  <ArrowRight className="size-[14.71px] lg:size-[18px]" />
                </Button>
              </div>
            </div>
          </div>

          <div className="py-10 px-5 md:p-10 relative g:px-5 lg:py-[50px] max-w-[1420px] mx-auto lg:border-x border-b border-primary-500/[.07]">
            <h1 className="text-[24px] lg:text-[36px] font-medium leading-none text-white">
              FAQ’s
            </h1>
            <TabsPrimitive.Tabs
              className="mt-5 lg:mt-6 max-md:space-y-[19.62px] md:flex md:gap-x-[19.62px] lg:gap-x-6"
              defaultValue="How It Works"
            >
              <TabsPrimitive.TabsList className="md:w-[199px] max-md:overflow-x-auto scrollbar-none lg:w-[323px] md:flex-none max-md:flex max-md:items-center gap-x-[19.62px] md:space-y-[19.62px] lg:space-y-6">
                <TabsPrimitive.Trigger
                  value="How It Works"
                  className="group data-[state=inactive]:hover:bg-white/10 transition duration-300 h-[52px] max-md:shrink-0 cursor-pointer max-md:gap-x-[81.74px] lg:h-[64px] truncate md:w-full focus-visible:outline-hidden px-5 lg:px-[25px] flex items-center justify-between text-[15px] lg:text-lg rounded-lg font-medium text-white leading-none border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] data-[state=active]:border-primary-500 bg-white/4"
                >
                  How It Works{" "}
                  <ArrowRight className="max-md:rotate-90 shrink-0 size-[18px] lg:size-6 opacity-0 group-hover:opacity-100 md:group-hover:translate-x-1.5 group-data-[state=active]:opacity-100 text-white/40 group-data-[state=active]:text-primary-500 transition duration-300" />
                </TabsPrimitive.Trigger>
                <TabsPrimitive.Trigger
                  value="Manage Your Project"
                  className="group data-[state=inactive]:hover:bg-white/10 transition duration-300 h-[52px] max-md:shrink-0 cursor-pointer max-md:gap-x-[81.74px] lg:h-[64px] truncate md:w-full focus-visible:outline-hidden px-5 lg:px-[25px] flex items-center justify-between text-[15px] lg:text-lg rounded-lg font-medium text-white leading-none border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] data-[state=active]:border-primary-500 bg-white/4"
                >
                  Manage Your Project{" "}
                  <ArrowRight className="max-md:rotate-90 shrink-0 size-[18px] lg:size-6 opacity-0 group-hover:opacity-100 md:group-hover:translate-x-1.5 group-data-[state=active]:opacity-100 text-white/40 group-data-[state=active]:text-primary-500 transition duration-300" />
                </TabsPrimitive.Trigger>
                <TabsPrimitive.Trigger
                  value="Pricing & Payments"
                  className="group data-[state=inactive]:hover:bg-white/10 transition duration-300 h-[52px] max-md:shrink-0 cursor-pointer max-md:gap-x-[81.74px] lg:h-[64px] truncate md:w-full focus-visible:outline-hidden px-5 lg:px-[25px] flex items-center justify-between text-[15px] lg:text-lg rounded-lg font-medium text-white leading-none border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] data-[state=active]:border-primary-500 bg-white/4"
                >
                  Pricing & Payments{" "}
                  <ArrowRight className="max-md:rotate-90 shrink-0 size-[18px] lg:size-6 opacity-0 group-hover:opacity-100 md:group-hover:translate-x-1.5 group-data-[state=active]:opacity-100 text-white/40 group-data-[state=active]:text-primary-500 transition duration-300" />
                </TabsPrimitive.Trigger>
                <TabsPrimitive.Trigger
                  value="Network & Services"
                  className="group data-[state=inactive]:hover:bg-white/10 transition duration-300 h-[52px] max-md:shrink-0 cursor-pointer max-md:gap-x-[81.74px] lg:h-[64px] truncate md:w-full focus-visible:outline-hidden px-5 lg:px-[25px] flex items-center justify-between text-[15px] lg:text-lg rounded-lg font-medium text-white leading-none border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] data-[state=active]:border-primary-500 bg-white/4"
                >
                  Network & Services{" "}
                  <ArrowRight className="max-md:rotate-90 shrink-0 size-[18px] lg:size-6 opacity-0 group-hover:opacity-100 md:group-hover:translate-x-1.5 group-data-[state=active]:opacity-100 text-white/40 group-data-[state=active]:text-primary-500 transition duration-300" />
                </TabsPrimitive.Trigger>
                <TabsPrimitive.Trigger
                  value="Apps"
                  className="group data-[state=inactive]:hover:bg-white/10 transition duration-300 h-[52px] max-md:shrink-0 cursor-pointer max-md:gap-x-[81.74px] lg:h-[64px] truncate md:w-full focus-visible:outline-hidden px-5 lg:px-[25px] flex items-center justify-between text-[15px] lg:text-lg rounded-lg font-medium text-white leading-none border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] data-[state=active]:border-primary-500 bg-white/4"
                >
                  Apps{" "}
                  <ArrowRight className="max-md:rotate-90 shrink-0 size-[18px] lg:size-6 opacity-0 group-hover:opacity-100 md:group-hover:translate-x-1.5 group-data-[state=active]:opacity-100 text-white/40 group-data-[state=active]:text-primary-500 transition duration-300" />
                </TabsPrimitive.Trigger>
              </TabsPrimitive.TabsList>

              <TabsPrimitive.Content
                value="How It Works"
                className="flex-auto rounded-md lg:rounded-lg border p-5 pb-[30px] lg:p-[50px] shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] bg-white/4 border-primary-500/25"
              >
                <div className="flex md:flex-row flex-col items-start gap-5 lg:gap-x-6 justify-between">
                  <div className="lg:max-w-[500px] flex-auto">
                    <h1 className="font-bold text-[20px] lg:text-[24px] text-white leading-none">
                      How to start hiring?
                    </h1>
                    <p className="mt-[6.54px] lg:mt-2 text-[13px] lg:text-base leading-tight text-white/40">
                      A sentence or two answering the question. A sentence or
                      two answering the question.
                    </p>
                  </div>

                  <Button
                    className="rounded-full cursor-pointer border-2 max-lg:h-9 max-lg:px-4 max-lg:text-[13px] max-lg:leading-[19.62px] hover:bg-primary-500 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] hover:border-primary-500 border-white text-white"
                    visual="gray"
                    size="xl"
                    variant="outlined"
                  >
                    Learn More
                  </Button>
                </div>

                <div className="mt-[30px] lg:mt-[50px] space-y-5 lg:space-y-[50px]">
                  <div className="flex md:flex-row flex-col md:items-center gap-3 lg:gap-x-8">
                    <div className="size-[61.86px] lg:size-[75.68px] relative overflow-hidden shrink-0 rounded-[6.19px] lg:rounded-[7.57px]">
                      <Image
                        className="object-cover"
                        src="/artificial-intelligence.jpeg"
                        alt="Artificial Intelligence"
                        fill
                      />
                    </div>

                    <div className="space-y-[6.54px] lg:space-y-2">
                      <h3 className="text-[15px] lg:text-lg leading-none font-medium text-white">
                        Title for step one of the process
                      </h3>
                      <p className="text-[13px] lg:text-base leading-tight text-white/40">
                        Brief description about the process in one to two
                        sentences. Brief description about the process in one to
                        two sentences.
                      </p>
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col md:items-center gap-3 lg:gap-x-8">
                    <div className="size-[61.86px] lg:size-[75.68px] relative overflow-hidden shrink-0 rounded-[6.19px] lg:rounded-[7.57px]">
                      <Image
                        className="object-cover"
                        src="/artificial-intelligence.jpeg"
                        alt="Artificial Intelligence"
                        fill
                      />
                    </div>

                    <div className="space-y-[6.54px] lg:space-y-2">
                      <h3 className="text-[15px] lg:text-lg leading-none font-medium text-white">
                        Title for step one of the process
                      </h3>
                      <p className="text-[13px] lg:text-base leading-tight text-white/40">
                        Brief description about the process in one to two
                        sentences. Brief description about the process in one to
                        two sentences.
                      </p>
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col md:items-center gap-3 lg:gap-x-8">
                    <div className="size-[61.86px] lg:size-[75.68px] relative overflow-hidden shrink-0 rounded-[6.19px] lg:rounded-[7.57px]">
                      <Image
                        className="object-cover"
                        src="/artificial-intelligence.jpeg"
                        alt="Artificial Intelligence"
                        fill
                      />
                    </div>

                    <div className="space-y-[6.54px] lg:space-y-2">
                      <h3 className="text-[15px] lg:text-lg leading-none font-medium text-white">
                        Title for step one of the process
                      </h3>
                      <p className="text-[13px] lg:text-base leading-tight text-white/40">
                        Brief description about the process in one to two
                        sentences. Brief description about the process in one to
                        two sentences.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsPrimitive.Content>
            </TabsPrimitive.Tabs>
          </div>

          <div className="max-w-[1420px] mx-auto relative py-10 px-3.5 md:p-10 lg:px-5 lg:py-[100px] lg:border-x border-b border-primary-500/[.07]">
            <div className="max-w-[814px] mx-auto p-5 lg:p-8 bg-white/4 rounded-lg flex md:flex-row flex-col gap-y-[30px] md:gap-x-10 lg:gap-x-[75px] lg:pl-[28px] border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
              <div className="max-md:h-[220.63px] w-full md:w-[304px] lg:w-[334px] relative flex-none overflow-hidden rounded-md">
                <Image
                  className="object-cover"
                  src="/comments.jpg"
                  alt="Comments"
                  fill
                />
              </div>

              <div className="md:py-[46.32px] lg:py-[44.98px]">
                <h1 className="text-[15px] lg:text-lg leading-none font-medium text-white">
                  Still have questions?
                </h1>
                <p className="text-[13px] lg:text-base mt-3 lg:mt-5 leading-none text-white/40">
                  Our support team has got your back. Reach out to get the
                  solutions to your questions.
                </p>

                <Button
                  className="bg-white cursor-pointer mt-[30px] max-lg:h-9 max-lg:pl-4 max-lg:pr-[17.16px] lg:mt-[50px] max-lg:text-[13.08px] max-lg:leading-[19.62px] max-lg:gap-x-[6px] text-black hover:bg-primary-500 hover:text-white rounded-full"
                  size="xl"
                >
                  <MessageSquare01 className="size-[12.26px] lg:size-[15px]" />{" "}
                  Chat with us
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-[1420px] relative mx-auto px-3.5 py-10 md:p-10 lg:py-[50px] lg:px-5 lg:border-x border-b border-primary-500/[.07]">
            <h1 className="text-[24px] lg:text-[38px] leading-none font-medium text-white">
              Trends, News, and Analysis
            </h1>
            <div className="mt-[30px] lg:mt-[50px] grid lg:grid-cols-2 gap-y-[19.62px] lg:gap-x-6">
              <article className="rounded-[6.54px] lg:rounded-lg border overflow-hidden border-primary-500/25 flex md:flex-row flex-col lg:flex-col shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                <div className="flex-auto relative shrink-0 h-[150px] max-md:w-full md:max-lg:w-[213px]">
                  <Image
                    className="object-cover"
                    src="/opened-laptop.jpg"
                    alt="Laptop"
                    sizes="100vw"
                    fill
                  />
                </div>

                <div className="p-5 lg:p-6 bg-white/4">
                  <span className="block text-[10px] lg:text-xs leading-none text-success-500">
                    UX/UI Processes & Tools
                  </span>

                  <Link href="#" className="focus-visible:outline-none">
                    <h1 className="mt-[5px] hover:underline transition duration-300 lg:mt-1.5 text-sm lg:text-[22px] leading-none font-medium text-white">
                      Content-Heavy Websites
                    </h1>
                  </Link>

                  <div className="mt-3 lg:mt-[15px] flex items-center gap-x-[19px]">
                    <span className="text-[10px] lg:text-xs text-white leading-none font-medium inline-block">
                      August 27, 2024
                    </span>
                    <span className="size-1 rounded-full shrink-0 bg-white/20" />
                    <span className="text-[10px] lg:text-xs text-white leading-none font-medium inline-block">
                      11 min read
                    </span>
                  </div>

                  <div className="mt-3 lg:mt-6 flex items-end gap-x-3 lg:gap-x-6">
                    <p className="text-white/40 text-[13px] lg:text-base flex-auto leading-none line-clamp-2 lg:line-clamp-3">
                      A few sentences about the content of the article. A few
                      sentences about the content of the article. A few
                      sentences about the content of the article. A few
                      sentences about the content of the article. A few
                      sentences about the content of the article. A few
                      sentences about the content of the article.
                    </p>
                    <button className="cursor-pointer size-[28px] lg:size-[35px] focus-visible:outline-hidden inline-flex items-center justify-center shrink-0 text-white/40 hover:text-white">
                      <ArrowUpRight className="size-[28px] lg:size-[35px]" />
                    </button>
                  </div>
                </div>
              </article>

              <div className="flex flex-col gap-y-[19.62px] lg:gap-y-6">
                <article className="flex md:flex-row flex-col rounded-[6.54px] lg:rounded-lg border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] overflow-hidden">
                  <div className="relative max-md:h-[150px] max-md:w-full md:w-[213px] lg:w-[205px] shrink-0">
                    <Image
                      src="/trading-chart.jpg"
                      className="object-cover"
                      alt="Trading chart"
                      fill
                    />
                  </div>
                  <div className="flex-auto p-5 lg:p-6 lg:pt-7 bg-white/4">
                    <span className="block text-warning-500 text-[10px] lg:text-xs leading-none">
                      Development And UX design
                    </span>

                    <Link href="#" className="focus-visible:outline-none">
                      <h1 className="mt-[5px] hover:underline transition duration-300 lg:mt-1.5 leading-none text-sm lg:text-base font-medium text-white">
                        Bitex. UX Design for Stock Analysis App.
                      </h1>
                    </Link>

                    <div className="mt-3 lg:mt-[15px] flex items-center gap-x-2 lg:gap-x-2.5">
                      <span className="inline-block leading-none text-[10px] lg:text-xs font-medium text-white">
                        August 27, 2024
                      </span>
                      <span className="size-1 lg:size-[5px] inline-block bg-white/20 rounded-full shrink-0" />
                      <span className="inline-block leading-none text-[10px] lg:text-xs font-medium text-white">
                        11 min read
                      </span>
                    </div>

                    <div className="mt-3 lg:mt-6 flex items-end gap-x-3 lg:gap-x-6">
                      <span className="text-[13px] lg:text-base text-white/40 leading-none line-clamp-2">
                        A few sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article.
                      </span>

                      <button className="cursor-pointer focus-visible:outline-hidden text-white/40 hover:text-white shrink-0">
                        <ArrowUpRight className="size-[28px] lg:size-[35px]" />
                      </button>
                    </div>
                  </div>
                </article>
                <article className="flex md:flex-row flex-col rounded-[6.54px] lg:rounded-lg border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] overflow-hidden">
                  <div className="relative max-md:h-[150px] max-md:w-full md:w-[213px] lg:w-[205px] shrink-0">
                    <Image
                      src="/trading-chart.jpg"
                      className="object-cover"
                      alt="Trading chart"
                      fill
                    />
                  </div>
                  <div className="flex-auto p-5 lg:p-6 lg:pt-7 bg-white/4">
                    <span className="block text-warning-500 text-[10px] lg:text-xs leading-none">
                      Development And UX design
                    </span>

                    <Link href="#" className="focus-visible:outline-none">
                      <h1 className="mt-[5px] hover:underline transition duration-300 lg:mt-1.5 leading-none text-sm lg:text-base font-medium text-white">
                        Bitex. UX Design for Stock Analysis App.
                      </h1>
                    </Link>

                    <div className="mt-3 lg:mt-[15px] flex items-center gap-x-2 lg:gap-x-2.5">
                      <span className="inline-block leading-none text-[10px] lg:text-xs font-medium text-white">
                        August 27, 2024
                      </span>
                      <span className="size-1 lg:size-[5px] inline-block bg-white/20 rounded-full shrink-0" />
                      <span className="inline-block leading-none text-[10px] lg:text-xs font-medium text-white">
                        11 min read
                      </span>
                    </div>

                    <div className="mt-3 lg:mt-6 flex items-end gap-x-3 lg:gap-x-6">
                      <span className="text-[13px] lg:text-base text-white/40 leading-none line-clamp-2">
                        A few sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article.
                      </span>

                      <button className="cursor-pointer focus-visible:outline-hidden text-white/40 hover:text-white shrink-0">
                        <ArrowUpRight className="size-[28px] lg:size-[35px]" />
                      </button>
                    </div>
                  </div>
                </article>
                <article className="flex md:flex-row flex-col rounded-[6.54px] lg:rounded-lg border border-primary-500/25 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)] overflow-hidden">
                  <div className="relative max-md:h-[150px] max-md:w-full md:w-[213px] lg:w-[205px] shrink-0">
                    <Image
                      src="/trading-chart.jpg"
                      className="object-cover"
                      alt="Trading chart"
                      fill
                    />
                  </div>
                  <div className="flex-auto p-5 lg:p-6 lg:pt-7 bg-white/4">
                    <span className="block text-warning-500 text-[10px] lg:text-xs leading-none">
                      Development And UX design
                    </span>

                    <Link href="#" className="focus-visible:outline-none">
                      <h1 className="mt-[5px] hover:underline transition duration-300 lg:mt-1.5 leading-none text-sm lg:text-base font-medium text-white">
                        Bitex. UX Design for Stock Analysis App.
                      </h1>
                    </Link>

                    <div className="mt-3 lg:mt-[15px] flex items-center gap-x-2 lg:gap-x-2.5">
                      <span className="inline-block leading-none text-[10px] lg:text-xs font-medium text-white">
                        August 27, 2024
                      </span>
                      <span className="size-1 lg:size-[5px] inline-block bg-white/20 rounded-full shrink-0" />
                      <span className="inline-block leading-none text-[10px] lg:text-xs font-medium text-white">
                        11 min read
                      </span>
                    </div>

                    <div className="mt-3 lg:mt-6 flex items-end gap-x-3 lg:gap-x-6">
                      <span className="text-[13px] lg:text-base text-white/40 leading-none line-clamp-2">
                        A few sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article. A few
                        sentences about the content of the article.
                      </span>

                      <button className="cursor-pointer focus-visible:outline-hidden text-white/40 hover:text-white shrink-0">
                        <ArrowUpRight className="size-[28px] lg:size-[35px]" />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="max-w-[1420px] relative mx-auto py-10 px-3.5 md:p-10 lg:px-5 lg:pt-[50px] lg:pb-[100px] lg:border-x border-b border-primary-500/[.07]">
            <div className="relative">
              {areCategoriesNotVisible && (
                <div className="absolute inset-x-0 bottom-0 h-[348px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(5,11,25,.5)_50%,rgba(5,11,25,1)_100%)]" />
              )}
              <h1 className="text-[24px] lg:text-[38px] leading-none font-medium text-white text-center">
                Browse Categories
              </h1>
              <div
                className={cn(
                  "grid grid-cols-2 md:grid-cols-4 gap-x-3 lg:gap-x-[100px] mt-[30px] lg:mt-[100px]",
                  {
                    "h-[400px] lg:h-[488px] overflow-hidden":
                      areCategoriesNotVisible,
                  }
                )}
              >
                <div className="space-y-[9.81px] lg:space-y-3">
                  <h1 className="text-[13px] lg:text-base leading-none text-white font-bold">
                    Software Development
                  </h1>
                  <div className="flex flex-col items-start">
                    {[
                      "Frontend Developer",
                      "Backend Developer",
                      "Full-stack Developer",
                      "DevOps Engineer",
                      "Mobile Developer (iOS)",
                      "Mobile Developer (Android)",
                      "Game Developer",
                      "Data Scientist",
                      "Machine Learning Engineer",
                      "AI Engineer",
                      "Cloud Engineer",
                      "Embedded Systems Engineer",
                      "QA Engineer",
                      "Automation Engineer",
                      "Solutions Architect",
                      "Technical Lead",
                      "Software Engineer Manager",
                      "Product Manager (Technical)",
                      "Security Engineer",
                      "Network Engineer",
                      "Database Administrator",
                      "Site Reliability Engineer (SRE)",
                      "Firmware Engineer",
                      "Big Data Engineer",
                      "Blockchain Developer",
                      "AR/VR Developer",
                      "Scrum Master",
                      "Release Engineer",
                      "Performance Engineer",
                      "API Developer",
                    ].map((role, index) => (
                      <Link
                        key={index}
                        className="text-[11px] lg:text-[13px] leading-6 transition duration-300 font-medium hover:text-white text-white/40"
                        href="#"
                      >
                        {role}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-[9.81px] lg:space-y-3">
                  <h1 className="text-[13px] lg:text-base leading-none text-white font-bold">
                    User Experience (UI/UX)
                  </h1>
                  <div className="flex flex-col items-start">
                    {[
                      "Frontend Developer",
                      "Backend Developer",
                      "Full-stack Developer",
                      "DevOps Engineer",
                      "Mobile Developer (iOS)",
                      "Mobile Developer (Android)",
                      "Game Developer",
                      "Data Scientist",
                      "Machine Learning Engineer",
                      "AI Engineer",
                      "Cloud Engineer",
                      "Embedded Systems Engineer",
                      "QA Engineer",
                      "Automation Engineer",
                      "Solutions Architect",
                      "Technical Lead",
                      "Software Engineer Manager",
                      "Product Manager (Technical)",
                      "Security Engineer",
                      "Network Engineer",
                      "Database Administrator",
                      "Site Reliability Engineer (SRE)",
                      "Firmware Engineer",
                      "Big Data Engineer",
                      "Blockchain Developer",
                      "AR/VR Developer",
                      "Scrum Master",
                      "Release Engineer",
                      "Performance Engineer",
                      "API Developer",
                    ].map((role, index) => (
                      <Link
                        key={index}
                        className="text-[11px] leading-[19.62px] lg:text-[13px] lg:leading-6 transition duration-300 font-medium hover:text-white text-white/40"
                        href="#"
                      >
                        {role}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-[9.81px] lg:space-y-3">
                  <h1 className="text-[13px] lg:text-base leading-none text-white font-bold">
                    Cyber Security
                  </h1>
                  <div className="flex flex-col items-start">
                    {[
                      "Frontend Developer",
                      "Backend Developer",
                      "Full-stack Developer",
                      "DevOps Engineer",
                      "Mobile Developer (iOS)",
                      "Mobile Developer (Android)",
                      "Game Developer",
                      "Data Scientist",
                      "Machine Learning Engineer",
                      "AI Engineer",
                      "Cloud Engineer",
                      "Embedded Systems Engineer",
                      "QA Engineer",
                      "Automation Engineer",
                      "Solutions Architect",
                      "Technical Lead",
                      "Software Engineer Manager",
                      "Product Manager (Technical)",
                      "Security Engineer",
                      "Network Engineer",
                      "Database Administrator",
                      "Site Reliability Engineer (SRE)",
                      "Firmware Engineer",
                      "Big Data Engineer",
                      "Blockchain Developer",
                      "AR/VR Developer",
                      "Scrum Master",
                      "Release Engineer",
                      "Performance Engineer",
                      "API Developer",
                    ].map((role, index) => (
                      <Link
                        key={index}
                        className="text-[11px] leading-[19.62px] lg:text-[13px] lg:leading-6 transition duration-300 font-medium hover:text-white text-white/40"
                        href="#"
                      >
                        {role}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-[9.81px] lg:space-y-3">
                  <h1 className="text-[13px] lg:text-base leading-none text-white font-bold">
                    Blockchain Consulting
                  </h1>
                  <div className="flex flex-col items-start">
                    {[
                      "Frontend Developer",
                      "Backend Developer",
                      "Full-stack Developer",
                      "DevOps Engineer",
                      "Mobile Developer (iOS)",
                      "Mobile Developer (Android)",
                      "Game Developer",
                      "Data Scientist",
                      "Machine Learning Engineer",
                      "AI Engineer",
                      "Cloud Engineer",
                      "Embedded Systems Engineer",
                      "QA Engineer",
                      "Automation Engineer",
                      "Solutions Architect",
                      "Technical Lead",
                      "Software Engineer Manager",
                      "Product Manager (Technical)",
                      "Security Engineer",
                      "Network Engineer",
                      "Database Administrator",
                      "Site Reliability Engineer (SRE)",
                      "Firmware Engineer",
                      "Big Data Engineer",
                      "Blockchain Developer",
                      "AR/VR Developer",
                      "Scrum Master",
                      "Release Engineer",
                      "Performance Engineer",
                      "API Developer",
                    ].map((role, index) => (
                      <Link
                        key={index}
                        className="text-[11px] leading-[19.62px] lg:text-[13px] lg:leading-6 transition duration-300 font-medium hover:text-white text-white/40"
                        href="#"
                      >
                        {role}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {areCategoriesNotVisible && (
              <div className="flex items-center justify-center mt-5 lg:mt-9">
                <Button
                  className="rounded-full cursor-pointer border-2 max-lg:h-9 max-lg:px-4 max-lg:text-[13px] max-lg:leading-[19.62px] hover:bg-primary-500 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] hover:border-primary-500 border-white text-white"
                  visual="gray"
                  size="xl"
                  variant="outlined"
                  onClick={() => setAreCategoriesNotVisible(false)}
                >
                  View more
                </Button>
              </div>
            )}
          </div>
        </div>

        <footer>
          <div className="border-y lg:px-[50px] 3xl:px-[100px] 4xl:px-[150px] 5xl:px-[250px] border-primary-500/[.07] bg-white/4 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
            <div className="max-w-[1420px] mx-auto border-x h-[44px] lg:h-[72px] border-primary-500/[.07] items-center flex justify-center">
              <Link
                className="focus-visible:outline-hidden inline-flex items-center gap-x-2 text-[11px] lg:text-[13px] leading-[19.62px] lg:leading-[24px] font-medium text-white"
                href="#header"
              >
                <ArrowUp className="size-[12.26px] lg:size-[15px]" /> Back to
                Top
              </Link>
            </div>
          </div>

          <div className="relative border-b border-primary-500/[.07] px-3.5 md:px-10 lg:px-[50px] 3xl:px-[100px] 4xl:px-[150px] 5xl:px-[250px] bg-[linear-gradient(180deg,rgba(255,255,255,.04)_0%,rgba(255,255,255,0)_100%)]">
            <div className="max-w-[1420px] mx-auto py-5 md:pt-10 md:pb-5 lg:px-5 lg:py-6 lg:border-x border-primary-500/[.07]">
              <div className="p-5 md:p-10 lg:p-[50px] relative rounded-[6px] lg:rounded-lg border flex flex-col max-md:gap-y-[26.16px] md:flex-row md:gap-x-5 lg:flex-col border-white/[.25] bg-white/2 shadow-[0px_1.7px_3.4px_0px_rgba(16,24,40,.05)]">
                <CroppedMarketeqLogo className="absolute right-0 max-lg:hidden inset-y-0" />

                <h1 className="text-[18px] md:text-[26px] lg:text-[24px] leading-tight font-medium text-white">
                  Ready to start your journey with the best talent?
                </h1>
                <div className="lg:contents">
                  <div className="lg:mt-8 flex items-center gap-x-[19.62px] lg:gap-x-6">
                    <Button
                      className="bg-white cursor-pointer max-lg:h-9 max-lg:px-3 max-lg:text-[13px] max-lg:leading-[19.62px] max-lg:gap-x-1 text-black hover:bg-primary-500 hover:text-white rounded-full"
                      size="xl"
                    >
                      Sign up{" "}
                      <ArrowRight className="size-[14.71px] lg:size-[15px]" />
                    </Button>
                    <Button
                      className="rounded-full cursor-pointer max-lg:h-9 max-lg:px-3 max-lg:text-[13px] max-lg:leading-[19.62px] max-lg:gap-x-1 border-2 hover:bg-primary-500 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] hover:border-primary-500 border-white text-white"
                      visual="gray"
                      size="xl"
                      variant="outlined"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>

                <div className="lg:mt-8">
                  <span className="text-xs lg:text-sm inline-block leading-none text-white">
                    Already have an account?{" "}
                    <Link
                      className="focus-visible:outline-hidden hover:underline"
                      href="#"
                    >
                      Log in
                    </Link>
                  </span>
                </div>
              </div>

              <div className="mt-10 lg:mt-[100px] flex max-lg:gap-y-10 lg:flex-row flex-col lg:items-start lg:justify-between">
                <div className="flex items-center gap-x-[16.35px] lg:gap-x-5">
                  <Link className="focus-visible:outline-none" href="/">
                    <Logo className="w-[98.08px] h-[14.4px] lg:w-[120px] lg:h-[17.63px] shrink-0" />
                  </Link>
                  <span className="text-xs lg:text-sm leading-none text-white">
                    Tech Projects on Demand
                  </span>
                </div>

                <div className="flex items-center justify-between lg:gap-x-[43px]">
                  <div className="flex items-center gap-x-[13.56px] lg:gap-x-[16.6px]">
                    <Link
                      href="#"
                      className="focus-visible:outline-hidden hover:bg-white hover:bg-white hover:text-dark-blue-400 transition duration-300 text-white size-[30px] flex items-center justify-center shrink-0 bg-white/2 border border-white/25 rounded-full"
                    >
                      <Facebook className="size-4" />
                    </Link>
                    <Link
                      href="#"
                      className="focus-visible:outline-hidden hover:bg-white hover:bg-white hover:text-dark-blue-400 transition duration-300 text-white size-[30px] flex items-center justify-center shrink-0 bg-white/2 border border-white/25 rounded-full"
                    >
                      <TwitterSolid className="size-4" />
                    </Link>
                    <Link
                      href="#"
                      className="focus-visible:outline-hidden hover:bg-white hover:bg-white hover:text-dark-blue-400 transition duration-300 text-white size-[30px] flex items-center justify-center shrink-0 bg-white/2 border border-white/25 rounded-full"
                    >
                      <Instagram className="size-4" />
                    </Link>
                    <Link
                      href="#"
                      className="focus-visible:outline-hidden hover:bg-white hover:bg-white hover:text-dark-blue-400 transition duration-300 text-white size-[30px] flex items-center justify-center shrink-0 bg-white/2 border border-white/25 rounded-full"
                    >
                      <LinkedInSolid className="size-4" />
                    </Link>
                  </div>

                  <button
                    onClick={() => setIsOpen(true)}
                    className="h-[31px] cursor-pointer pl-2 pr-[11px] inline-flex items-center gap-x-[7px] focus-visible:outline-hidden"
                  >
                    <Globe className="size-5 text-white" />
                    <span className="text-white text-xs leading-none">
                      English
                    </span>
                    {isOpen ? (
                      <ChevronUp className="size-4 text-white" />
                    ) : (
                      <ChevronDown className="size-4 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:px-[50px] 3xl:px-[100px] 4xl:px-[150px] 5xl:px-[250px]">
            <div className="max-w-[1420px] mx-auto py-3 px-3.5 md:px-10 lg:py-6 lg:px-5 border-t lg:border-x border-primary-500/[.07]">
              <div className="lg:px-5 flex lg:flex-row flex-col gap-y-5 lg:gap-y-0 lg:justify-between lg:items-start">
                <div className="lg:max-w-[482px]">
                  <span className="text-white/40 text-xs lg:text-[13px] leading-none font-light">
                    © 2011 - 2026 Marketeq Digital Inc. All Rights Reserved.
                    Marketeq Projects is a registered trademark of Marketeq Inc.
                    Terms and conditions, features, support, pricing, and
                    service options are subject to change without notice.
                  </span>
                </div>

                <div className="inline-flex items-center gap-x-3.5 lg:gap-x-5">
                  <Link
                    className="focus-visible:outline-hidden whitespace-nowrap hover:underline text-xs leading-5 font-medium text-white"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                  <span className="inline-block h-4 w-px bg-white/15 shrink-0" />
                  <Link
                    className="focus-visible:outline-hidden whitespace-nowrap hover:underline text-xs leading-5 font-medium text-white"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
