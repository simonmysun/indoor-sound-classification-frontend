import Iframe from 'react-iframe'
import './style.css';

function HourlyHeatmap(props: {
  prefix: string,
  orgId: number,
  rangeFrom: number,
  rangeTo: number,
  refresh: string,
  deviceId: string[],
  tags: string[]
}) {
  const panelId = 28;
  const theme = 'light';
  const height = `${600}px`;
  const { 
    prefix,
    orgId,
    rangeFrom,
    rangeTo,
    refresh,
    deviceId,
    tags
   } = props;
  return (
    <Iframe url={`${prefix}?orgId=${orgId}&from=${rangeFrom}&to=${rangeTo}&refresh=${refresh}${deviceId.map(id => `&var-device_id=${id}`).join('')}${tags.map( tag => `&var-tag=${tag}`).join('')}&theme=${theme}&panelId=${panelId}`}
      styles={{ position: 'relative', height: height, width: '100%' }} />
  );
}

export default HourlyHeatmap;