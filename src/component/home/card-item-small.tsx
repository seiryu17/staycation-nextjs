import { Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Image from "next/image";
import Router from "next/router";
import IItem from "../../constant/model/item";

interface IProps {
  data: IItem;
}

const CardItemSmall = (props: IProps) => {
  const { data } = props;
  const mq = useBreakpoint();
  return (
    <div
      className={`card-item type-small border-radius-16 use-pointer position-relative ${
        mq.xs ? "w-100 mt-1" : "mt-3"
      }`}
      onClick={() => Router.push("/item/2")}
    >
      <Image src={data?.img} width={260} height={180} />
      {data?.isPopular && (
        <div className="position-absolute badge ph-3 bg-french-rose">
          <Typography.Text className="text-color-white text-weight-medium">
            Popular{" "}
          </Typography.Text>
          <Typography.Text className="text-color-white">Choice</Typography.Text>
        </div>
      )}

      <Typography.Text className="text-color-primary-pressed text-weight-medium text-size-18">
        {data?.name}
      </Typography.Text>
      <br></br>
      <Typography.Text className="text-color-neutral-50 text-size-14">
        {data?.place}
      </Typography.Text>
    </div>
  );
};

export default CardItemSmall;
