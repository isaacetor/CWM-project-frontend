import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message: string;
  messageDelay?: number;
  textReplyTime?: number;
  position?: "left" | "right";
  zIndex?: number;
  bgColor?: string;
  iconColor?: string;
}

const ClickWhatsApp = () => {
  // const props: WhatsAppWidgetProps = {
  //   phoneNumber: "2349079678532",
  //   message: "Hello, I have a question",
  //   position: "right",
  //   bgColor: "#25D366",
  //   iconColor: "#fff",
  // };

  // return <WhatsAppWidget {...props} messageDelay={5000} textReplyTime={60} />;

  return (
    <div style={{ position: "absolute" }}>
      <WhatsAppWidget phoneNumber="09079678532" />
    </div>
  );
};

export default ClickWhatsApp;
