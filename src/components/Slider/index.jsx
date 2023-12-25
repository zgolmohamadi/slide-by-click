import { useState } from "react";

import { retrieveCourses } from "../../services";
import { useQuery } from "react-query";
import {
  StylesSection,
  StyledList,
  StyledWrapper,
} from "../styles/StyledList.styled";
import Course from "../Course";
import Loading from "../Loading";
import { Center, ErrorMessage } from "../styles/Global.styled";

export default function Slider() {
  const [selected, setSelected] = useState({
    position: 0,
    id: null,
  });

  const {
    data: courses,
    error,
    isLoading,
  } = useQuery("getcourses", retrieveCourses, {
      onSuccess: (data) => {
      if (selected.id === null) {
        const selectedId = data[Math.round(data.length / 2)].id;

        setSelected({ ...selected, id: selectedId, firstLoad: true });
      }
    },
  });

  if (isLoading)
    return (
      <Center>
        <Loading />
      </Center>
    );

    console.log(selected);

  if (error) return <ErrorMessage>An error occurred: {error.message}</ErrorMessage>;

  return (
    <>
      <StylesSection position={selected.position}>
        <span></span>
        <StyledWrapper>
          <div>
            <StyledList>
              {courses.map((course) => (
                <Course
                  key={course?.id}
                  setSelected={setSelected}
                  selected={selected}
                  item={course}
                />
              ))}
            </StyledList>
          </div>
        </StyledWrapper>
      </StylesSection>
    </>
  );
}
