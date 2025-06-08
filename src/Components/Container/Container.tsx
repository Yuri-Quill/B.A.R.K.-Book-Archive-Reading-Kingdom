import clsify from "@/utils/clsify";
import "./container.scss";

interface ContainerProps {
   children: React.ReactNode;
   cn?: string;
}

const Container = ({ children, cn }: ContainerProps) => {
   return <div className={clsify("container", [cn])}>{children}</div>;
};

export default Container;
