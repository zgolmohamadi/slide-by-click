import StudyTime from "../../assets/StudyTime.svg";
import PropTypes from "prop-types";
import { StyledCourse } from "../styles/StyledList.styled";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { retrieveCoursesItems } from "../../services";
import { setCourseItems, setLoading } from "../../store/courseSlice";
import { TYPE_MAP_ID } from "../../data";
import toHoursAndMinutes from "../../utils/minutesToHours.js";
import { useEffect, useRef } from "react";
import { useResizeWindow } from "../../hooks/useResizeWindow.js";

function Course(props) {
  const { item, setSelected, selected } = props;
  const dispatch = useDispatch();
  const centerOfWindow = useRef();
  centerOfWindow.current = window.innerWidth / 2;

  const elementRef = useRef(null);

  useEffect(() => {
    if (selected.id === item.id && elementRef.current && selected.firstLoad) {
      setSelected({ ...selected, firstLoad: false });
      elementRef.current.click(item?.id);
    }
  }, [item.id, selected, selected.firstLoad, selected.id, setSelected]);


  const handleResize = () => {
    return (centerOfWindow.current = window.innerWidth / 2);
  };
  useResizeWindow(handleResize)

  const { mutate: getCourseItems, isLoading } = useMutation(
    (courseType) => retrieveCoursesItems(courseType),
    {
      onSuccess: (data) => {
        dispatch(setCourseItems(data));
      },
    }
  );

  if (isLoading) {
    dispatch(setLoading(true));
  }

  const handleClick = (e, id) => {
    e.stopPropagation();

    const elementRect = e.target.getBoundingClientRect();

    const centerPosition =
      selected.position +
      (centerOfWindow.current - elementRect.left) -
      elementRect.width / 2;

    setSelected({ position: centerPosition, id: item.id });

    const courseType = TYPE_MAP_ID[id];

    getCourseItems(courseType);
  };

  return (
    <StyledCourse
      onClick={(e) => handleClick(e, item?.id)}
      selected={selected.id === item.id}
      className={selected.id === item.id ? "selectd" : ""}
      ref={elementRef}
    >
      <div>
        <span>
          <img src={item?.unit_icon} />
        </span>
      </div>
      <div>
        <span>سطح {item?.hamdarsUserUnitLevelIndex}</span>
        <span>{item?.name}</span>
        <p>
          <img src={StudyTime} alt="" />
          <span>{toHoursAndMinutes(item?.sum_user_study)}</span>
        </p>
      </div>
    </StyledCourse>
  );
}

Course.propTypes = {
  item: PropTypes.object,
  selected: PropTypes.object,
  setSelected: PropTypes.func,
};
export default Course;
