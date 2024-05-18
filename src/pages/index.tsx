import undrawDocusaurusMountain from '@site/static/img/undraw_docusaurus_mountain.svg';
import undrawDocusaurusTree from '@site/static/img/undraw_docusaurus_tree.svg';
import Layout from '@theme/Layout';

import { ComponentProps, ComponentType, ReactNode } from 'react';

import styles from './index.module.css';

type FeatureProps = {
    Svg: ComponentType<ComponentProps<'svg'>>;
    title: ReactNode;
    description: ReactNode;
};

const Feature = ({ Svg, title, description }: FeatureProps) => (
    <div>
        <Svg className={styles.featureSvg} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const features: FeatureProps[] = [
    {
        Svg: undrawDocusaurusMountain,
        title: 'Easy to Use',
        description:
            'Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.',
    },
    {
        Svg: undrawDocusaurusTree,
        title: 'Focus on What Matters',
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and
                move your <code>docs</code> into the docs directory.
            </>
        ),
    },
    {
        Svg: undrawDocusaurusTree,
        title: 'Powered by React',
        description:
            'Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.',
    },
];

const Home = () => (
    <Layout title="Playground" description="测试">
        <main>
            <header className={styles.header}>
                <h1>Arcrsr的小站</h1>
                <p>记录工作生活中的点滴，分享心得体会</p>
            </header>
            <section className={styles.featureSection}>
                {features.map((feature) => (
                    <Feature {...feature} />
                ))}
            </section>
        </main>
    </Layout>
);

export default Home;
