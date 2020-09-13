import GradientCircularProgress, { GradientCircularProgressProps } from "GradientCircularProgress"
import React from "react"

interface CircularProgressProps extends Omit<GradientCircularProgressProps, "startColor" | "middleColor" | "endColor"> {
  color: string;
}

const CircularProgress: React.FunctionComponent<CircularProgressProps> = ({
  color,
  ...props
}) => {

  return (
    <GradientCircularProgress
      {...props}
      startColor={color}
      middleColor={color}
      endColor={color}
    />
  )
}

export default CircularProgress
