/* eslint-disable react/display-name */
import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import classNames from 'classnames'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import PortableTextComponent from './PortableText'
import { PortableText } from '@portabletext/react'
import styles from './PostBody.module.css'
const AccordionDemo = ({ title, content }) => (
  <Accordion.Root className="AccordionRoot" type="single" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>
        <button className="linear flex flex-row items-center rounded-xl bg-gray-100 px-4 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 ml-auto mr-auto">{title}</button>
      </AccordionTrigger>
      <AccordionContent>
        <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
          <PortableText value={content.portableText} />
        </div>
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
)

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Trigger>
  </Accordion.Header>
))

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
))

export default AccordionDemo
