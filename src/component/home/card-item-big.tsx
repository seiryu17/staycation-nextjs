import { Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Image from "next/image";
import Router from "next/router";
import IItem from "../../constant/model/item";

interface IProps {
  type: number;
  data: IItem;
}

const CardItemBig = (props: IProps) => {
  const mq = useBreakpoint();
  const { type, data } = props;
  return (
    <div
      className={`card-item type-${type} border-radius-16 position-relative use-pointer ${
        mq.xs ? "mb-2 w-100" : "mt-3"
      }`}
      onClick={() => Router.push("/item/2")}
    >
      <Image src={data?.img} width={360} height={`${type === 1 ? 425 : 200}`} />
      <div className="position-absolute badge ph-3 bg-french-rose">
        <Typography.Text className="text-color-white">
          {data?.price}$ per night
        </Typography.Text>
      </div>
      <div className="position-absolute overlay"></div>
      <div
        style={{ bottom: 0, left: 0 }}
        className="position-absolute ph-2 pv-1"
      >
        <Typography.Text className="text-color-white text-weight-medium text-size-18">
          {data?.name}
        </Typography.Text>
        <div>
          <Typography.Text className="text-color-white text-size-14">
            {data?.place}
          </Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default CardItemBig;
