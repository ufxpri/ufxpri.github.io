환경
windows 10
python 3.7.2
CUDA 10.0
cudDNN 7.5.0
tensorflow 2.0.0-alpha0
tensorflow-gpu 2.0.0-alpha0

순서대로 하면 된다..

가장 중요하게 봐야하는건 설치하기 전 깨끗한 환경에서 하는것이 가장 좋다.

cuda
- nvcc -V 으로 설치된 버젼을 확인
windows 의 경우 프로그램 추가 제거 로 설치를 확인 제거할 수 있다.

cudnn
만약 이전에 설치한 경험이 있다면 path 가 설정되어있을 수 있다.
path 설정을 확인해야 한다.

python
테스트는 못해봤지만 기존의 tensorflow 관련 라이브러리는 모두 제거하고 시작하는게 정신건강에 좋다.

위의 안전사항을 숙지한 후 설치를 시작하면 모든게 공식문서대로 진행된다.

설치를 마치면
다음 경로를 반드시 추가한다.
(자동) SET PATH=C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v10.0\bin;%PATH%
(자동) SET PATH=C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v10.0\extras\CUPTI\libx64;%PATH%
(수동) SET PATH=C:\tools\cuda\bin;%PATH%

설정이 안되있으면 dll 에러가 난다.

세번째가 수동인이유는 저게 cudnn 경로설정인데 사용자가 아무데나 놓을 수 있다...