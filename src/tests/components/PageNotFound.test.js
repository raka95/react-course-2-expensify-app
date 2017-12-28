import React from 'react';
import PageNotFound from '../../components/PageNotFound';
import {shallow} from 'enzyme';

test("should render PageNotFound page",()=>{
    const wrapper=shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
});