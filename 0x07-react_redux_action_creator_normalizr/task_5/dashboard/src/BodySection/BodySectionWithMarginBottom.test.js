import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  it('renders BodySection component with props passed correctly', () => {
    const title = 'Test Title';
    const children = <p>Test Children</p>;

    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection)).toHaveLength(1);

    const bodySectionProps = wrapper.find(BodySection).props();
    expect(bodySectionProps.title).toEqual(title);
    expect(bodySectionProps.children).toEqual(children);

    expect(wrapper.hasClass('bodySectionWithMargin')).toBe(true);
  });
});
