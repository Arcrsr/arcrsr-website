import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { ComponentProps, ComponentType, ReactNode } from 'react';

import devtools from './devtools.svg';
import Hero from './hero.svg';
import styles from './index.module.css';
import skills from './skills.svg';
import thinking from './thinking.svg';

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
        Svg: skills,
        title: 'TypeScript全栈转型中',
        description:
            'NestJs+React技术栈，力求能独立完成中小型网站，app，小程序的设计与开发',
    },
    {
        Svg: devtools,
        title: '开发环境折腾爱好者',
        description:
            'windows，mac和linux三系统使用者，热衷于terminal，neovim和vscode插件配置的打磨，畅享丝滑的开发流程，让编程变成一种享受',
    },
    {
        Svg: thinking,
        title: '人生随想与感悟',
        description:
            '工作并不是全部，还要关注生活的点滴，思考人与人之间的关系，审视自身，做一个更加通透的人',
    },
];

const Home = () => {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title="Home"
            description="是一个由Arcrsr创建的个人博客，主要分享编程开发知识和项目，该网站基于 React 驱动的静态网站生成器 Docusaurus 构建。"
        >
            <main>
                <header className={styles.header}>
                    <div className={styles.headerBackground}>
                        <div>
                            <h1>{siteConfig.title}</h1>
                            <p>{siteConfig.tagline}</p>
                        </div>
                        <Hero />
                    </div>
                </header>
                <section className={styles.featureSection}>
                    {features.map((feature) => (
                        <Feature {...feature} />
                    ))}
                </section>
            </main>
        </Layout>
    );
};

export default Home;
