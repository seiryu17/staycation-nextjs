import { Typography } from "antd";
import Image from "next/image";

interface IProps {
  img: string;
}

const CardItemSmall = (props: IProps) => {
  const { img } = props;
  return (
    <div
      className={`card-item type-small border-radius-16 mt-3 use-pointer position-relative`}
    >
      <Image src={img} width={260} height={180} />
      <div className="position-absolute badge ph-3 bg-french-rose">
        <Typography.Text className="text-color-white text-weight-medium">
          Popular{" "}
        </Typography.Text>
        <Typography.Text className="text-color-white">Choice</Typography.Text>
      </div>
      <Typography.Text className="text-color-primary-pressed text-weight-medium text-size-18">
        Blue Origin Fams
      </Typography.Text>
      <br></br>
      <Typography.Text className="text-color-neutral-50 text-size-14">
        Jakarta, Indonesia
      </Typography.Text>
    </div>
  );
};

export default CardItemSmall;
