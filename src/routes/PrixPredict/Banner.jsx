import styled from 'styled-components';
import bannerImage from '../../assets/banner-prixpredict.png'
 
const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
 
const BannerImage = styled.img`
  width: 100%;
  height: 30%;
  display: block;
  object-fit: cover;
  padding-bottom: 80px;
`;
 
const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src={bannerImage} alt="Banner" />
    </BannerContainer>
  );
}
 
export default Banner;