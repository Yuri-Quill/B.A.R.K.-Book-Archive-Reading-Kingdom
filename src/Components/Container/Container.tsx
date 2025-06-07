import clsify from "@/utils/clsify";
import "./container.scss";

interface ContainerProps {
   children: React.ReactNode;
   modifier?: string;
}

const Container = ({ children, modifier }: ContainerProps) => {
   return <div className={clsify("container", [modifier])}>{children}</div>;
};

export default Container;
