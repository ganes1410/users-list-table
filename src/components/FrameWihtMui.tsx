import { ReactNode } from "react";
import { create } from "jss";
import { jssPreset } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import Frame, { FrameContextConsumer } from "react-frame-component";

const CustomHead = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Previewer</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <base target="_parent" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
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
              <ThemeProvider theme={createMuiTheme({})}>
                {children}
              </ThemeProvider>
            </StylesProvider>
          );
        }}
      </FrameContextConsumer>
    </Frame>
  );
};

export default FrameWihtMui;
