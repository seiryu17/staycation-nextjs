import { Typography } from "antd";
import Image from "next/image";
import Router from "next/router";

interface IProps {
  type: number;
  img: string;
}

const CardItemBig = (props: IProps) => {
  const { type, img } = props;
  return (
    <div
      className={`card-item type-${type} border-radius-16 position-relative mt-3 use-pointer`}
      onClick={() => Router.push("/item/2")}
    >
      <Image src={img} width={360} height={`${type === 1 ? 425 : 200}`} />
      <div className="position-absolute badge ph-3 bg-french-rose">
        <Typography.Text className="text-color-white">
          22$ per night
        </Typography.Text>
      </div>
      <div className="position-absolute overlay"></div>
      <div
        style={{ bottom: 0, left: 0 }}
        className="position-absolute ph-2 pv-1"
      >
        <Typography.Text className="text-color-white text-weight-medium text-size-18">
          Blue Origin Fams
        </Typography.Text>
        <div>
          <Typography.Text className="text-color-white text-size-14">
            Jakarta, Indonesia
          </Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default CardItemBig;
