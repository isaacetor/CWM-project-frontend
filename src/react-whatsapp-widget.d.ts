declare module "react-whatsapp-widget";
declare module "*react-whatsapp-widget";
{
  import { CSSProperties, ReactNode } from "react";

  interface WhatsAppWidgetProps {
    phoneNumber: string;
    message: string;
    companyName: string;
    sendButton: string;
    position: "left" | "right";
    avatar: string;
    headerTitle: string;
    headerColor: string;
    backgroundColor: string;
    textReplyTime: string;
    zIndex: number;
    styles?: CSSProperties;
  }

  interface WhatsAppWidgetState {
    visible: boolean;
  }

  export class WhatsAppWidget extends React.Component<
    WhatsAppWidgetProps,
    WhatsAppWidgetState
  > {}
}
