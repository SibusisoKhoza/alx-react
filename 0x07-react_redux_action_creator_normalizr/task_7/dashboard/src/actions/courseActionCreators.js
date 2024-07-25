import { useDispatch } from 'react-redux';
import { selectCourse, unSelectCourse } from './courseActionCreators';

export const useCourseActions = () => {
  const dispatch = useDispatch();

  return {
    selectCourse: (index) => dispatch(selectCourse(index)),
    unSelectCourse: (index) => dispatch(unSelectCourse(index))
  };
};