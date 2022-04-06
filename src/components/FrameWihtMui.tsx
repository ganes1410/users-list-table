import { ReactNode } from "react";
import { create } from "jss";
import { jssPreset } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import Frame, { FrameContextConsumer } from "react-frame-component";

const CustomHead = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>User Table</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <base target="_parent" />
    </>
  );
};

const FrameWihtMui = ({ children }: { children: ReactNode }) => {
  return (
    <Frame frameBorder={0} head={<CustomHead />}>
      <FrameContextConsumer>
        {({ document }: any) => {
          const jss = create({
            plugins: [...jssPreset().plugins],
            insertionPoint: document.head,
          });
          return (
            <StylesProvider jss={jss}>
              <ThemeProvider theme={createTheme({})}>{children}</ThemeProvider>
            </StylesProvider>
          );
        }}
      </FrameContextConsumer>
    </Frame>
  );
};

export default FrameWihtMui;
