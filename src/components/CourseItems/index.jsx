import { useSelector } from "react-redux";
import toHoursAndMinutes from "../../utils/minutesToHours.js";
import Loading from "../Loading";
import { Center } from "../styles/Global.styled.js";
import {
  Item,
  ItemDetail,
  ItemIcon,
  ItemsWrapper,
} from "../styles/CourseItems.styled";
import StudyTime from "../../assets/StudyTime.svg";

export default function CourseItems() {
  const data = useSelector((state) => state.courseItems);

  if (data.loading)
    return (
      <Center>
        <Loading />
      </Center>
    );

  return (
    <ItemsWrapper>
      {data.courseItems.map((item) => {
        return (
          <Item key={item?.id}>
            <ItemIcon>
              <span>
                <img src={item?.icon_url} alt="" />
              </span>
            </ItemIcon>
            <ItemDetail>
              <div>
                <span>{item?.name}</span>
                <span>
                  <img src={StudyTime} alt="" />
                  <span>{toHoursAndMinutes(item?.sum_user_study)}</span>
                </span>
              </div>
              <span></span>
            </ItemDetail>
          </Item>
        );
      })}
    </ItemsWrapper>
  );
}
