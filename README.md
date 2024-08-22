<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="local.css">
</head>

<div class="bk_container">
	<div class="bk_item"><a href="#sec_dgm">I. Deep Generative Modeling</a></div>
	<div class="bk_item"><a href="#sec_nlp">II. Multimodal<br/>NLP</a></div>
	<div class="bk_item"><a href="#sec_mct">III. Music & Cinematic Techs.</a></div>
    <div class="bk_item"><a href="#sec_challenges">IV. Hosted Challenges</a></div>
</div>

<a name="sec_dgm"></a>
# I. Deep Generative Modeling

<br>

<div class="trow">
	<div class="tile">
		<h3>CTM</h3>
		<img src="./assets/figure_1_ver2.svg">
		<h5>
			<a href="https://arxiv.org/abs/2310.02279">[arXiv]</a>
			<a href="https://consistencytrajectorymodel.github.io/CTM/">[demo]</a>
		</h5>
		<p>Unified framework enables diverse samplers and 1-step generation SOTAs</p>
		<div class="tile_highlight">ICLR24</div>
	</div>
	<div class="tile">
		<h3>SAN</h3>
		<img src="./assets/SAN.png">
		<h5>
			<a href="https://arxiv.org/abs/2301.12811">[arXiv]</a>
			<a href="https://github.com/sony/san">[code]</a>
			<a href="https://ytakida.github.io/san/">[demo]</a>
		</h5>
		<p>Enhancing GAN with metrizable discriminators</p>
		<div class="tile_highlight">ICLR24</div>
		<p>Applications:<br/>
			<a href="https://arxiv.org/abs/2309.02836">[Vocoder]</a>
		</p>
	</div>
	<div class="tile">
		<h3>MPGD</h3>
		<img src="./assets/MPGD.png">
		<h5>
			<a href="https://arxiv.org/abs/2311.16424">[arXiv]</a>
			<a href="https://kellyyutonghe.github.io/mpgd/">[demo]</a>
		</h5>
		<p>Fast, Efficient, Training-Free, and Controllable diffusion-based generation method</p>
		<div class="tile_highlight">ICLR24</div>
	</div>
	<div class="tile">
		<h3>PaGoDA</h3>
		<img src="./assets/pagoda_red.svg">
		<h5>
			<a href="https://arxiv.org/abs/2405.14822">[arXiv]</a>
		</h5>
		<p>A 64x64 pre-trained diffusion model is all you need for 1-step high-resolution SOTA generation</p>
		<div class="tile_highlight">Preprint</div>
	</div>		
	<div class="tile">
		<h3>HQ-VAE</h3>
		<img src="./assets/hqvae.png">
		<h5>
			<a href="https://openreview.net/forum?id=xqAVkqrLjx">[OpenReview]</a>
			<a href="https://arxiv.org/abs/2401.00365">[arXiv]</a>
		</h5>
		<p>Generalizing hierarchical VQ-VAEs with a Bayesian framework</p>
		<div class="tile_highlight">TMLR</div>
	</div>
	<div class="tile">
		<h3>FP-Diffusion</h3>
		<img src="./assets/ScoreFPE_3Doutline_single.gif">
		<h5>
			<a href="https://proceedings.mlr.press/v202/lai23d.html">[PMLR]</a>
			<a href="https://github.com/sony/fp-diffusion">[code]</a>
		</h5>
		<p>Improving density estimation of diffusion</p>
		<div class="tile_highlight">ICML23</div>
	</div>
	<div class="tile">
		<h3>GibbsDDRM</h3>
		<img src="./assets/GibbsDDRM.png">
		<h5>
			<a href="https://proceedings.mlr.press/v202/murata23a.html">[PMLR]</a>
			<a href="https://github.com/sony/gibbsddrm">[code]</a>
		</h5>
		<p>Achieving blind inversion using DDPM</p>
		<div class="tile_highlight">ICML23 Oral</div>
		<p>Applications:<br/>
			<a href="https://arxiv.org/abs/2211.04124">[DeReverb]</a>
			<a href="https://arxiv.org/abs/2210.17287">[SpeechEnhance]</a>
		</p>
	</div>
	<div class="tile">
		<h3>Consistency-type Models</h3>
		<img src="./assets/ctm_thumbnail.png">
		<h5>
			<a href="https://arxiv.org/abs/2306.00367">[arXiv]</a>
		</h5>
		<p>Theoretically unified framework for "consistency" on diffusion model</p>
		<div class="tile_highlight">ICML23 SPIGM workshop</div>
	</div>
	<div class="tile">
		<h3>SQ-VAE</h3>
		<a href="https://proceedings.mlr.press/v162/takida22a.html"><img src="./assets/sqvae.png"></a>
		<h5>
			<a href="https://proceedings.mlr.press/v162/takida22a.html">[PMLR]</a>
			<a href="https://arxiv.org/abs/2205.07547">[arXiv]</a>
			<a href="https://github.com/sony/sqvae">[code]</a>
		</h5>
		<p>Improving codebook utilization and training stability</p>
		<div class="tile_highlight">ICML22</div>
	</div>
	<div class="tile">
		<h3>AR-ELBO</h3>
		<img src="./assets/ar-elbo.png">
		<h5>
			<a href="https://www.sciencedirect.com/science/article/pii/S0925231222010591">[Elsevier]</a>
			<a href="https://arxiv.org/abs/2102.08663">[arXiv]</a>
		</h5>
		<p>Mitigating oversmoothness in VAE</p>
		<div class="tile_highlight">Neurocomputing</div>
	</div>
    <div class="tile" style="background-color: white;"></div>
    <div class="tile" style="background-color: white;"></div>
</div>





<a name="sec_nlp"></a>
# II. Multimodal NLP

<br>

<div class="trow">
	<div class="tile">
		<h3>DiffuCOMET</h3>
		<a href="https://arxiv.org/pdf/2402.17011"><img src="./assets/diffcomet.png"></a>
		<h5>
			[ACL]
			<a href="https://arxiv.org/pdf/2402.17011">[arXiv]</a>
			<a href="https://github.com/Silin159/DiffuCOMET">[code]</a>
		</h5>
		<p>DiffuCOMET: Contextual Commonsense Knowledge Diffusion</p>
		<div class="tile_highlight">ACL24</div>
	</div>
	<div class="tile">
		<h3>CyCLIPs/CyCLAPs</h3>
		<a href="https://arxiv.org/pdf/2310.13267"><img src="./assets/cyclips.png"></a>
		<h5>
			[ACL]
			<a href="https://arxiv.org/pdf/2310.13267">[arXiv]</a>
		</h5>
		<p>On the Language Encoder of Contrastive Cross-modal Models</p>
		<div class="tile_highlight">ACL24</div>
	</div>
	<div class="tile">
		<h3>DIIR</h3>
		<a href="https://arxiv.org/pdf/2403.15737"><img src="./assets/diir.png"></a>
		<h5>
			[ACL]
			<a href="https://arxiv.org/pdf/2403.15737">[arXiv]</a>
			<a href="https://github.com/zhouhanxie/DIIR">[code]</a>
		</h5>
		<p>Few-shot Dialogue Strategy Learning for Motivational Interviewing via Inductive Reasoning</p>
		<div class="tile_highlight">ACL24</div>
	</div>
	<div class="tile">
		<h3>PeaCok</h3>
		<a href="https://arxiv.org/abs/2305.02364"><img src="./assets/personas.png"></a>
		<h5>
			<a href="https://aclanthology.org/2023.acl-long.362/">[ACL]</a>
			<a href="https://arxiv.org/abs/2305.02364">[arXiv]</a>
			<a href="https://github.com/Silin159/PeaCoK">[code]</a>
		</h5>
		<p>PeaCoK: Persona Commonsense Knowledge for Consistent and Engaging Narratives<br>(ACL2023, Outstanding Paper Award)</p>
	</div>
	<div class="tile">
		<h3>ComFact</h3>
		<a href="https://aclanthology.org/2022.findings-emnlp.120/"><img src="./assets/comfact.png"></a>
		<h5>
			<a href="https://aclanthology.org/2022.findings-emnlp.120/">[EMNLP]</a>
			<a href="https://arxiv.org/abs/2210.12678">[arXiv]</a>
			<a href="https://github.com/epfl-nlp/ComFact">[code]</a>
		</h5>
		<p>ComFact: A Benchmark for Linking Contextual Commonsense Knowledge<br>(EMNLP2022 Findings)</p>
	</div>
        <div class="tile" style="background-color: white;"></div>
        <div class="tile" style="background-color: white;"></div>

</div>


<a name="sec_mct"></a>
# III. Music & Cinematic Technologies

<br>

<div class="trow">
	<div class="tile">
		<h3>Mixing Graph Estimation</h3>
		<img src="./assets/grafx.png">
		<h5>
			<a href="https://arxiv.org/abs/2406.01049">[arXiv]</a>
            <a href="https://github.com/sh-lee97/grafx-prune/tree/main">[code]</a>
            <a href="https://sh-lee97.github.io/grafx-prune/">[demo]</a>
		</h5>
		<p>Searching For Music Mixing Graphs: A Pruning Approach</p>
		<div class="tile_highlight">DAFx24</div>
	</div>
	<div class="tile">
		<h3>Guitar Amp. Modeling</h3>
		<img src="./assets/guitarampmodeling.png">
		<h5>
            <a href="https://arxiv.org/abs/2406.15751">[arXiv]</a>
		</h5>
		<p>Improving Unsupervised Clean-to-Rendered Guitar Tone Transformation Using GANs and Integrated Unaligned Clean Data</p>
		<div class="tile_highlight">DAFx24</div>
	</div>
	<div class="tile">
		<h3>Text-to-Music Editing</h3>
		<img src="./assets/musicmagus.png">
		<h5>
			<a href="https://arxiv.org/abs/2402.06178">[arXiv]</a>
			<a href="https://github.com/ldzhangyx/MusicMagus">[code]</a>
            <a href="https://wry-neighbor-173.notion.site/MusicMagus-Zero-Shot-Text-to-Music-Editing-via-Diffusion-Models-8f55a82f34944eb9a4028ca56c546d9d">[demo]</a>
		</h5>
		<p>MusicMagus: Zero-Shot Text-to-Music Editing via Diffusion Models</p>
		<div class="tile_highlight">IJCAI24</div>
	</div>
	<div class="tile">
		<h3>GenWarp</h3>
		<img src="./assets/genwarp.png">
		<h5>
			<a href="https://arxiv.org/abs/2405.17251">[arXiv]</a>
			<a href="https://genwarp-nvs.github.io/">[demo]</a>
		</h5>
		<p>GenWarp: Single Image to Novel Views with Semantic-Preserving Generative Warping</p>
	</div>
	<div class="tile">
		<h3>Acoustic Inv. Rendering</h3>
		<img src="./assets/hearing_anything_anywhere.png">
		<h5>
			<a href="https://openaccess.thecvf.com/content/CVPR2024/html/Wang_Hearing_Anything_Anywhere_CVPR_2024_paper.html">[CVF]</a>
			<a href="https://arxiv.org/abs/2406.07532">[arXiv]</a>
			<a href="https://zenodo.org/records/11195833">[dataset]</a>
			<a href="https://github.com/maswang32/hearinganythinganywhere/">[code]</a>
			<a href="https://masonlwang.com/hearinganythinganywhere/">[demo]</a>
		</h5>
		<p>Hearing Anything Anywhere</p>
		<div class="tile_highlight">CVPR24</div>
	</div>
	<div class="tile">
		<h3>STARSS23</h3>
		<img src="./assets/STARSS23.png">
		<h5>
			<a href="https://arxiv.org/abs/2306.09126">[arXiv]</a>
			<a href="https://zenodo.org/records/7880637">[dataset]</a>
		</h5>
		<p>STARSS23: An Audio-Visual Dataset of Spatial Recordings of Real Scenes with Spatiotemporal Annotations of Sound Events</p>
		<div class="tile_highlight">NeurIPS23</div>
	</div>
	<div class="tile">
		<h3>BigVSAN Vocoder</h3>
		<img src="./assets/BigVSAN.png">
		<h5>
			<a href="https://arxiv.org/abs/2309.02836">[arXiv]</a>
			<a href="https://github.com/sony/bigvsan">[code]</a>
			<a href="https://takashishibuyasony.github.io/bigvsan/">[demo]</a>
		</h5>
		<p>BigVSAN: Enhancing GAN-based Neural Vocoders with Slicing Adversarial Network</p>
		<div class="tile_highlight">ICASSP24</div>
	</div>
	<div class="tile">
		<h3>Instr.-Agnostic Trans.</h3>
		<img src="./assets/timbretrap.png">
		<h5>
			<a href="https://ieeexplore.ieee.org/document/10446141">[IEEE]</a>
			<a href="https://arxiv.org/abs/2309.15717">[arXiv]</a>
		</h5>
		<p>Timbre-Trap: A Low-Resource Framework for Instrument-Agnostic Music Transcription</p>
		<div class="tile_highlight">ICASSP24</div>
	</div>
	<div class="tile">
		<h3>Vocal Restoration</h3>
		<img src="./assets/vrdmg.png">
		<h5>
			<a href="https://ieeexplore.ieee.org/document/10446423">[IEEE]</a>
			<a href="https://arxiv.org/abs/2309.06934">[arXiv]</a>
			<a href="https://carlosholivan.github.io/demos/audio-restoration-2023.html">[demo]</a>
		</h5>
		<p>VRDMG: Vocal Restoration via Diffusion Posterior Sampling with Multiple Guidance</p>
		<div class="tile_highlight">ICASSP24</div>
	</div>	
	<div class="tile">
		<h3>Zero-/Few-shot SELD</h3>
		<img src="./assets/ZeroFewSELD.png">
		<h5>
			<a href="https://ieeexplore.ieee.org/document/10448497">[IEEE]</a>
			<a href="https://arxiv.org/abs/2309.09223">[arXiv]</a>
		</h5>
		<p>Zero- and Few-shot Sound Event Localization and Detection</p>
		<div class="tile_highlight">ICASSP24</div>
	</div>
	<div class="tile">
		<h3>CLIPSep</h3>
		<img src="./assets/CLIPSep.png">
		<h5>
			<a href="https://openreview.net/forum?id=H-T3F0dMbyj">[OpenReview]</a>
			<a href="https://arxiv.org/abs/2212.07065">[arXiv]</a>
			<a href="https://github.com/sony/CLIPSep">[code]</a>
			<a href="https://sony.github.io/CLIPSep/">[demo]</a>
		</h5>
		<p>CLIPSep: Learning Text-queried Sound Separation with Noisy Unlabeled Videos<br>(ICLR2023)</p>
	</div>	
	<div class="tile">
		<h3>hFT-Transformer</h3>
		<img src="./assets/hfttransformer.png">
		<h5>
			<a href="https://arxiv.org/abs/2307.04305">[arXiv]</a>
			<a href="https://github.com/sony/hFT-Transformer">[code]</a>
		</h5>
		<p>Automatic Piano Transcription with Hierarchical Frequency-Time Transformer<br>(ISMIR2023)</p>
	</div>
	<div class="tile">
		<h3>Audio Restoration: ViT-AE</h3>
		<img src="./assets/vitae.png">
		<h5>
			<a href="https://ieeexplore.ieee.org/document/10248171">[IEEE]</a>
			<a href="https://arxiv.org/abs/2305.06701">[arXiv]</a>
			<a href="https://zzaudio.github.io/Demo_Extend_AudioMAE_toward_Restoration/demo_page.html">[demo]</a>
		</h5>
		<p>Extending Audio Masked Autoencoders Toward Audio Restoration<br>(WASPAA2023)</p>
	</div>
	<div class="tile">
		<h3>Diffiner</h3>
		<img src="./assets/Diffiner.png">
		<h5>
			<a href="https://www.isca-speech.org/archive/interspeech_2023/sawata23_interspeech.html">[ISCA]</a>
			<a href="https://arxiv.org/abs/2210.17287">[arXiv]</a>
			<a href="https://github.com/sony/diffiner">[code]</a>
		</h5>
		<p>Diffiner: A Versatile Diffusion-based Generative Refiner for Speech Enhancement<br>(INTERSPEECH2023)</p>
	</div>
	<div class="tile">
		<h3>Automatic Music Tagging</h3>
		<img src="./assets/ResAtt.png">
		<h5>
			<a href="https://arxiv.org/abs/2302.08136">[arXiv]</a>
		</h5>
		<p>An Attention-based Approach To Hierarchical Multi-label Music Instrument Classification<br>(ICASSP2023)</p>
	</div>
	<div class="tile">
		<h3>Vocal Dereverberation</h3>
		<img src="./assets/dereverb.png">
		<h5>
			<a href="https://arxiv.org/abs/2211.04124">[arXiv]</a>
			<a href="https://koichi-saito-sony.github.io/unsupervised-vocal-dereverb/">[demo]</a>
		</h5>
		<p>Unsupervised Vocal Dereverberation with Diffusion-based Generative Models<br>(ICASSP2023)</p>
	</div>
	<div class="tile">
		<h3>Mixing Style Transfer</h3>
		<img src="./assets/mixstyletransfer.png">
		<h5>
			<a href="https://arxiv.org/abs/2211.02247">[arXiv]</a>
			<a href="https://github.com/jhtonyKoo/music_mixing_style_transfer">[code]</a>
			<a href="https://jhtonykoo.github.io/MixingStyleTransfer/">[demo]</a>
		</h5>
		<p>Music Mixing Style Transfer: A Contrastive Learning Approach to Disentangle Audio Effects<br>(ICASSP2023)</p>
	</div>
	<div class="tile">
		<h3>Music Transcription</h3>
		<img src="./assets/amt.png">
		<h5>
			<a href="https://arxiv.org/abs/2210.05148">[arXiv]</a>
			<a href="https://github.com/sony/DiffRoll">[code]</a>
			<a href="https://sony.github.io/DiffRoll/">[demo]</a>
		</h5>
		<p>DiffRoll: Diffusion-based Generative Music Transcription with Unsupervised Pretraining Capability<br>(ICASSP2023)</p>
	</div>
	<div class="tile">
		<h3>Singing Voice Vocoder</h3>
		<img src="./assets/vocoder.png">
		<h5>
			<a href="https://arxiv.org/abs/2210.07508">[arXiv]</a>
			<a href="https://t-naoya.github.io/hdm/">[demo]</a>
		</h5>
		<p>Hierarchical Diffusion Models for Singing Voice Neural Vocoder<br>(ICASSP2023)</p>
	</div>
	<div class="tile">
		<h3>Distortion Effect Removal</h3>
		<img src="./assets/deeffect.png">
		<h5>
			<a href="https://ismir2022program.ismir.net/poster_113.html">[poster]</a>
			<a href="https://arxiv.org/abs/2202.01664">[arXiv]</a>
			<a href="https://joimort.github.io/distortionremoval/">[demo]</a>
		</h5>
		<p>Distortion Audio Effects: Learning How to Recover the Clean Signal<br>(ISMIR2022)</p>
	</div>
	<div class="tile">
		<h3>Automatic Music Mixing</h3>
		<img src="./assets/automix.png">
		<h5>
			<a href="https://ismir2022program.ismir.net/poster_11.html">[poster]</a>
			<a href="https://arxiv.org/abs/2208.11428">[arXiv]</a>
			<a href="https://github.com/sony/fxnorm-automix">[code]</a>
			<a href="https://marco-martinez-sony.github.io/FxNorm-automix/">[demo]</a>
		</h5>
		<p>Automatic Music Mixing with Deep Learning and Out-of-Domain Data<br>(ISMIR2022)</p>
	</div>
	<div class="tile">
		<h3>Sound Separation</h3>
		<a href="https://ieeexplore.ieee.org/document/9746317"><img src="./assets/srcsep.png"></a>
		<h5>
			<a href="https://ieeexplore.ieee.org/document/9746317">[IEEE]</a>
		</h5>
		<p>Music Source Separation with Deep Equilibrium Models<br>(ICASSP2022)</p>
	</div>
	<div class="tile">
		<h3>Automatic DJ Transition</h3>
		<img src="./assets/djtransgan.png">
		<h5>
			<a href="https://arxiv.org/abs/2110.06525">[arXiv]</a>
			<a href="https://github.com/ChenPaulYu/DJtransGAN">[code]</a>
			<a href="https://paulyuchen.com/djtransgan-icassp2022/">[demo]</a>
		</h5>
		<p>Automatic DJ Transitions with Differentiable Audio Effects and Generative Adversarial Networks<br>(ICASSP2022)</p>
	</div>
	<div class="tile">
		<h3>Sound Event Localization and Detection</h3>
		<img src="./assets/ACCDOA.png">
		<h5>
			<a href="https://ieeexplore.ieee.org/document/9746384">[IEEE]</a>
			<a href="https://arxiv.org/abs/2110.07124">[arXiv]</a>
		</h5>
		<p>Multi-ACCDOA: Localizing and Detecting Overlapping Sounds from the Same Class with Auxiliary Duplicating Permutation Invariant Training<br>(ICASSP2022)</p>
	</div>
	<div class="tile">
		<h3>Singing Voice Conversion</h3>
		<img src="./assets/svc.png">
		<h5>
			<a href="https://arxiv.org/abs/2210.11096">[arXiv]</a>
			<a href="https://t-naoya.github.io/rosvc/">[demo]</a>
		</h5>
		<p>Robust One-Shot Singing Voice Conversion</p>
	</div>
	<div class="tile">
		<h3>Sound Separation</h3>
		<a href="https://www.youtube.com/watch?v=EWYxJGmw0Ng"><img src="./assets/enoch_arden.jpg"></a>
		<h5>
			<a href="https://www.youtube.com/watch?v=EWYxJGmw0Ng">[video]</a>
			<a href="https://www.sony.com/en/SonyInfo/technology/stories/AI_Sound_Separation/">[site]</a>
		</h5>
		<p>Glenn Gould and Kanji Ishimaru 2021: A collaboration with AI Sound Separation after 60 years</p>
	</div>
<div class="tile" style="background-color: white;"></div>
</div>

<a name="sec_challenges"></a>
# IV. Hosted Challenges

<br/>

<div class="trow">
	<div class="tile">
		<h3>DCASE Challenge Task 3</h3>
		<img src="./assets/DCASE.png">
		<h5>
			<a href="https://dcase.community/challenge2023/#sound-event-localization-and-detection-evaluated-in-real-spatial-sound-scenes">[DCASE Challenge2023]</a>
		</h5>
		<p>Sound Event Localization and Detection Evaluated in Real Spatial Sound Scenes</p>
	</div>
	<div class="tile">
		<h3>CPD Challenge 2023</h3>
		<a href="https://www.aicrowd.com/challenges/commonsense-persona-grounded-dialogue-challenge-2023"><img src="./assets/cpdc.png"></a>
		<h5>
			<a href="https://www.aicrowd.com/challenges/commonsense-persona-grounded-dialogue-challenge-2023">[CPD Challenge 2023]</a>
		</h5>
		<p>Commonsense Persona-grounded Dialogue Challenge</p>
	</div>
	<div class="tile">
		<h3>SDX Challenge 2023</h3>
		<a href="https://www.aicrowd.com/challenges/sound-demixing-challenge-2023"><img src="./assets/SDX.png"></a>
		<h5>
			<a href="https://www.aicrowd.com/challenges/sound-demixing-challenge-2023">[site]</a>
			<a href="https://transactions.ismir.net/articles/10.5334/tismir.171">[paper (music)]</a>
			<a href="https://transactions.ismir.net/articles/10.5334/tismir.172">[paper (cinematic)]</a>
		</h5>
		<p>Sound Demixing Challenge 2023</p>
	</div>	
	<div class="tile">
		<h3>MDX Challenge 2021</h3>
		<a href="https://mdx-workshop.github.io/"><img src="./assets/MDX.png"></a>
		<h5>
			<a href="https://mdx-workshop.github.io/">[site]</a>
			<a href="https://www.frontiersin.org/articles/10.3389/frsip.2021.808395/full">[frontiers]</a>
		</h5>
		<p>Music Demixing Challenge 2021</p>
	</div>
    <div class="tile" style="background-color: white;"></div>
    <div class="tile" style="background-color: white;"></div>
</div>
### Contact
<h5 align="left"> Yuki Mitsufuji (yuhki.mitsufuji@sony.com) </h5>
