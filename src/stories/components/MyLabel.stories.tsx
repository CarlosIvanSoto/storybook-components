import { MyLabel, Props as MyLabelProps } from "../../components/MyLabel";
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select'},
        size: { control: 'select'},
        label: { control: 'text'},
        allCaps: { control: 'boolean' },
        fontColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

const InitialValues: MyLabelProps = {
    label: 'Hello World',
    size: 'normal',
    allCaps: false,
    color: 'primary' 
}

export const Basic = Template.bind({})
Basic.args = {
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
    color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    color: 'tertiary'
}

export const CustomColor = Template.bind({})
CustomColor.args = {
    fontColor: '#1a1a1a'
}

//CUSTOM FROM COLOR
// fontColor: 