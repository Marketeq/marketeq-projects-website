"use client"

import React from "react"
import { cn } from "@/utils/functions"
import { Popover, PopoverRootProps, Portal } from "@ark-ui/react"
import { useMedia } from "react-use"

export const ArkPopoverRoot = ({
  positioning = { offset: { mainAxis: 70 }, flip: false },
  closeOnInteractOutside = true,
  portalled = true,
  ...props
}: PopoverRootProps) => (
  <Popover.Root
    positioning={positioning}
    closeOnInteractOutside={closeOnInteractOutside}
    {...props}
  />
)

ArkPopoverRoot.displayName = "PopoverRoot"

export const ArkPopoverTrigger = React.forwardRef<
  React.ElementRef<typeof Popover.Trigger>,
  React.ComponentProps<typeof Popover.Trigger>
>(({ className, ...props }, ref) => (
  <Popover.Trigger
    className={cn(
      "group focus-visible:outline-none text-white text-sm leading-[19.07px] inline-flex gap-x-2 items-center",
      className
    )}
    {...props}
    ref={ref}
  />
))

ArkPopoverTrigger.displayName = "PopoverTrigger"

export const ArkPopoverPositioner = React.forwardRef<
  React.ElementRef<typeof Popover.Positioner>,
  React.ComponentPropsWithoutRef<typeof Popover.Positioner>
>(({ style, ...props }, ref) => {
  const widerThanLg = useMedia("(min-width:1024px)")
  return (
    <Popover.Positioner
      style={{
        position: "fixed",
        top: widerThanLg ? 70 : 56,
        right: 0,
        left: "auto",
        transform: "none",
        ...style,
      }}
      {...props}
      ref={ref}
    />
  )
})

ArkPopoverPositioner.displayName = "PopoverPositioner"

export const ArkPopoverContent = React.forwardRef<
  React.ElementRef<typeof Popover.Content>,
  React.ComponentPropsWithoutRef<typeof Popover.Content>
>(({ className, style, ...props }, ref) => {
  return (
    <Portal>
      <ArkPopoverPositioner>
        <Popover.Content
          ref={ref}
          className={cn(
            "relative z-40 w-[456px] bottom-0 px-5 bg-dark-blue-600 duration-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-top-[100vh] data-[state=closed]:slide-out-to-top-[100vh]",
            className
          )}
          {...props}
        />
      </ArkPopoverPositioner>
    </Portal>
  )
})

ArkPopoverContent.displayName = "PopoverContent"

export const ArkPopoverIndicator = Popover.Indicator
