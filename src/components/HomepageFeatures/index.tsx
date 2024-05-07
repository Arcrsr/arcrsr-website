import undrawDocusaurusMountain from '@site/static/img/undraw_docusaurus_mountain.svg';
import undrawDocusaurusReact from '@site/static/img/undraw_docusaurus_react.svg';
import undrawDocusaurusTree from '@site/static/img/undraw_docusaurus_tree.svg';
import Heading from '@theme/Heading';

import React, { ComponentProps, ComponentType } from 'react';

import cn from '../../utils/cn';

import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: ComponentType<ComponentProps<'svg'>>;
    description: React.JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Easy to Use',
        Svg: undrawDocusaurusMountain,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and used to get
                your website up and running quickly.
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        Svg: undrawDocusaurusTree,
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and
                move your docs into the <code>docs</code> directory.
            </>
        ),
    },
    {
        title: 'Powered by React',
        Svg: undrawDocusaurusReact,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can be extended
                while reusing the same header and footer.
            </>
        ),
    },
];

const Feature = ({ title, Svg, description }: FeatureItem) => (
    <div className={cn('col col--4')}>
        <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
        </div>
    </div>
);

const HomepageFeatures = () => (
    <section className={styles.features}>
        <div className="container">
            <div className="row">
                {FeatureList.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
        </div>
    </section>
);

export default HomepageFeatures;
