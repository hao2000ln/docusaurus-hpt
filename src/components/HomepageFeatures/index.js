import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quy trình hóa',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Quy trình hóa các hoạt động liên quan đến nghiệp vụ quản lý tài sản để giúp cho công việc được minh bạch, hiệu quả và giảm thiểu sai sót.
      </>
    ),
  },
  {
    title: 'Thông tin tập trung',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dữ liệu của <code>hàng triệu tài sản</code> được quản lý tập trung trên một ứng dụng duy nhất, giúp đưa ra cái nhìn tổng quan về hiện trạng của toàn bộ tải sản .
      </>
    ),
  },
  {
    title: 'Độ tin cậy cao',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Xây dựng và quản lý kế hoạch tài chính, mua sắm phù hợp, đảm bảo mua đúng/mua đủ/mua kịp thời. <br /><br />
        Nâng cao năng lực bảo dưỡng/bảo trì/sửa chữa giúp đảm bảo khả năng vận hành của tài sản liên tục.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
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
}
