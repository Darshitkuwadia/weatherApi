import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

const title = 'Layout Title';
const subTitle = 'Layout Sub Title';

describe('Layout', () => {
  it('should render the Title amd SubTitle Component correctly', () => { 
    let layout = shallow(
      <Layout title={title} subTitle={subTitle}/> 
    )  
    expect(layout).toMatchSnapshot();
  });
  it('renders the children', () => {
    let layout = shallow(
      <Layout title={title} subTitle={subTitle}>
        <p>Children</p>
      </Layout>
    ); 
    expect(layout).toMatchSnapshot();
  });
}); 