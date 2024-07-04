import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
  let wrapper;

  describe('With empty listCourses or no listCourses prop', () => {
    beforeEach(() => {
      wrapper = shallow(<CourseList />);
    });

    it('renders correctly without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders "No course available yet" when listCourses is empty', () => {
      wrapper.setProps({ listCourses: [] });
      expect(wrapper.find(CourseListRow).length).toBe(3); // Two header rows + one "No course available yet" row
      expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toBe('No course available yet');
    });
  });

  describe('With listCourses containing elements', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders the correct number of CourseListRow components', () => {
      expect(wrapper.find(CourseListRow).length).toBe(5); // Two header rows + three course rows
    });

    it('renders the CourseListRows with the correct values', () => {
      expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toBe('ES6');
      expect(wrapper.find(CourseListRow).at(2).prop('textSecondCell')).toBe(60);
      expect(wrapper.find(CourseListRow).at(3).prop('textFirstCell')).toBe('Webpack');
      expect(wrapper.find(CourseListRow).at(3).prop('textSecondCell')).toBe(20);
      expect(wrapper.find(CourseListRow).at(4).prop('textFirstCell')).toBe('React');
      expect(wrapper.find(CourseListRow).at(4).prop('textSecondCell')).toBe(40);
    });
  });
});
