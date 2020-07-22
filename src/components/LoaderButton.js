import React from "react";
//import { Button, Glyphicon } from "react-bootstrap";
import { withStyles } from '@material-ui/core/styles'
import {Button, CircularProgress } from '@material-ui/core'

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      // className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && 
        // <Glyphicon glyph="refresh" className="spinning" />
        <CircularProgress />
      }
      {props.children}
    </Button>
  );
}