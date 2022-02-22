import DashConstants from '../../src/dash/constants/DashConstants';

const expect = require('chai').expect;

describe('DashConstants', function () {
    it('DashConstants should exist', () => {
        expect(DashConstants).to.exist; // jshint ignore:line
        expect(DashConstants.BASE_URL).to.equal('BaseURL');
        expect(DashConstants.SEGMENT_BASE).to.equal('SegmentBase');
        expect(DashConstants.SEGMENT_TEMPLATE).to.equal('SegmentTemplate');
        expect(DashConstants.SEGMENT_LIST).to.equal('SegmentList');
        expect(DashConstants.SEGMENT_URL).to.equal('SegmentURL');
        expect(DashConstants.SEGMENT_TIMELINE).to.equal('SegmentTimeline');
        expect(DashConstants.SEGMENT_PROFILES).to.equal('segmentProfiles');
        expect(DashConstants.ADAPTATION_SET).to.equal('AdaptationSet');
        expect(DashConstants.REPRESENTATION).to.equal('Representation');
        expect(DashConstants.REPRESENTATION_INDEX).to.equal('RepresentationIndex');
        expect(DashConstants.SUB_REPRESENTATION).to.equal('SubRepresentation');
        expect(DashConstants.INITIALIZATION).to.equal('Initialization');
        expect(DashConstants.INITIALIZATION_MINUS).to.equal('initialization');
        expect(DashConstants.MPD).to.equal('MPD');
        expect(DashConstants.PERIOD).to.equal('Period');
        expect(DashConstants.ASSET_IDENTIFIER).to.equal('AssetIdentifier');
        expect(DashConstants.EVENT_STREAM).to.equal('EventStream');
        expect(DashConstants.ID).to.equal('id');
        expect(DashConstants.PROFILES).to.equal('profiles');
        expect(DashConstants.SERVICE_LOCATION).to.equal('serviceLocation');
        expect(DashConstants.RANGE).to.equal('range');
        expect(DashConstants.INDEX).to.equal('index');
        expect(DashConstants.MEDIA).to.equal('media');
        expect(DashConstants.BYTE_RANGE).to.equal('byteRange');
        expect(DashConstants.INDEX_RANGE).to.equal('indexRange');
        expect(DashConstants.MEDIA_RANGE).to.equal('mediaRange');
        expect(DashConstants.VALUE).to.equal('value');
        expect(DashConstants.CONTENT_TYPE).to.equal('contentType');
        expect(DashConstants.MIME_TYPE).to.equal('mimeType');
        expect(DashConstants.BITSTREAM_SWITCHING).to.equal('BitstreamSwitching');
        expect(DashConstants.BITSTREAM_SWITCHING_MINUS).to.equal('bitstreamSwitching');
        expect(DashConstants.CODECS).to.equal('codecs');
        expect(DashConstants.DEPENDENCY_ID).to.equal('dependencyId');
        expect(DashConstants.MEDIA_STREAM_STRUCTURE_ID).to.equal('mediaStreamStructureId');
        expect(DashConstants.METRICS).to.equal('Metrics');
        expect(DashConstants.METRICS_MINUS).to.equal('metrics');
        expect(DashConstants.REPORTING).to.equal('Reporting');
        expect(DashConstants.WIDTH).to.equal('width');
        expect(DashConstants.HEIGHT).to.equal('height');
        expect(DashConstants.SAR).to.equal('sar');
        expect(DashConstants.FRAMERATE).to.equal('frameRate');
        expect(DashConstants.AUDIO_SAMPLING_RATE).to.equal('audioSamplingRate');
        expect(DashConstants.MAXIMUM_SAP_PERIOD).to.equal('maximumSAPPeriod');
        expect(DashConstants.START_WITH_SAP).to.equal('startWithSAP');
        expect(DashConstants.MAX_PLAYOUT_RATE).to.equal('maxPlayoutRate');
        expect(DashConstants.CODING_DEPENDENCY).to.equal('codingDependency');
        expect(DashConstants.SCAN_TYPE).to.equal('scanType');
        expect(DashConstants.FRAME_PACKING).to.equal('FramePacking');
        expect(DashConstants.AUDIO_CHANNEL_CONFIGURATION).to.equal('AudioChannelConfiguration');
        expect(DashConstants.CONTENT_PROTECTION).to.equal('ContentProtection');
        expect(DashConstants.ESSENTIAL_PROPERTY).to.equal('EssentialProperty');
        expect(DashConstants.SUPPLEMENTAL_PROPERTY).to.equal('SupplementalProperty');
        expect(DashConstants.INBAND_EVENT_STREAM).to.equal('InbandEventStream');
        expect(DashConstants.PRODUCER_REFERENCE_TIME).to.equal('ProducerReferenceTime');
        expect(DashConstants.ACCESSIBILITY).to.equal('Accessibility');
        expect(DashConstants.ROLE).to.equal('Role');
        expect(DashConstants.RATING).to.equal('Rating');
        expect(DashConstants.CONTENT_COMPONENT).to.equal('ContentComponent');
        expect(DashConstants.SUBSET).to.equal('Subset');
        expect(DashConstants.LANG).to.equal('lang');
        expect(DashConstants.VIEWPOINT).to.equal('Viewpoint');
        expect(DashConstants.ROLE_ASARRAY).to.equal('Role_asArray');
        expect(DashConstants.REPRESENTATION_ASARRAY).to.equal('Representation_asArray');
        expect(DashConstants.PRODUCERREFERENCETIME_ASARRAY).to.equal('ProducerReferenceTime_asArray');
        expect(DashConstants.ACCESSIBILITY_ASARRAY).to.equal('Accessibility_asArray');
        expect(DashConstants.AUDIOCHANNELCONFIGURATION_ASARRAY).to.equal('AudioChannelConfiguration_asArray');
        expect(DashConstants.CONTENTPROTECTION_ASARRAY).to.equal('ContentProtection_asArray');
        expect(DashConstants.MAIN).to.equal('main');
        expect(DashConstants.DYNAMIC).to.equal('dynamic');
        expect(DashConstants.MEDIA_PRESENTATION_DURATION).to.equal('mediaPresentationDuration');
        expect(DashConstants.MINIMUM_UPDATE_PERIOD).to.equal('minimumUpdatePeriod');
        expect(DashConstants.CODEC_PRIVATE_DATA).to.equal('codecPrivateData');
        expect(DashConstants.BANDWITH).to.equal('bandwidth');
        expect(DashConstants.SOURCE_URL).to.equal('sourceURL');
        expect(DashConstants.TIMESCALE).to.equal('timescale');
        expect(DashConstants.DURATION).to.equal('duration');
        expect(DashConstants.START_NUMBER).to.equal('startNumber');
        expect(DashConstants.PRESENTATION_TIME_OFFSET).to.equal('presentationTimeOffset');
        expect(DashConstants.AVAILABILITY_START_TIME).to.equal('availabilityStartTime');
        expect(DashConstants.AVAILABILITY_END_TIME).to.equal('availabilityEndTime');
        expect(DashConstants.TIMESHIFT_BUFFER_DEPTH).to.equal('timeShiftBufferDepth');
        expect(DashConstants.MAX_SEGMENT_DURATION).to.equal('maxSegmentDuration');
        expect(DashConstants.PRESENTATION_TIME).to.equal('presentationTime');
        expect(DashConstants.MIN_BUFFER_TIME).to.equal('minBufferTime');
        expect(DashConstants.MAX_SUBSEGMENT_DURATION).to.equal('maxSubsegmentDuration');
        expect(DashConstants.START).to.equal('start');
        expect(DashConstants.CENC_DEFAULT_KID).to.equal('cenc:default_KID');
        expect(DashConstants.DVB_PRIORITY).to.equal('dvb:priority');
        expect(DashConstants.DVB_WEIGHT).to.equal('dvb:weight');
        expect(DashConstants.SUGGESTED_PRESENTATION_DELAY).to.equal('suggestedPresentationDelay');
        expect(DashConstants.WALL_CLOCK_TIME).to.equal('wallClockTime');
        expect(DashConstants.PRESENTATION_TIME).to.equal('presentationTime');
    });
});
